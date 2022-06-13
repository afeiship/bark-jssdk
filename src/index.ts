import httpSchema from '@jswork/node-http-schema';
import { ApiInstance, ApiOptions, ApiHandler, InitOptions, defaultApiCallback } from './typing';

const options = {
  transformResponse: ({ data }) => data,
};

const defaults = {
  sdkKey: process?.env?.BARK_SDK_KEY,
  baseURL: 'https://api.day.app',
};

const API_SCHEMA = [
  {
    items: {
      notify: ['post', ''],
    },
  },
];

export default class {
  public opts: InitOptions;
  public notify: ApiHandler = defaultApiCallback;

  constructor(inOptions?: InitOptions) {
    this.opts = Object.assign({}, defaults, inOptions);
    if (!this.validate()) return;

    const api: ApiInstance = httpSchema(
      {
        host: this.opts.baseURL,
        request: [`/${this.opts.sdkKey}`, 'json'],
        items: API_SCHEMA,
      },
      options
    );

    Object.assign(this, api);
  }

  public static notify(inOptions: ApiOptions): Promise<any> {
    const { sdkKey, ...opts } = inOptions;
    const initOpts = sdkKey ? { sdkKey } : {};
    return new this(initOpts).notify(opts);
  }

  public validate(): boolean | never {
    if (!this.opts.sdkKey) {
      throw new Error('sdkKey is required');
    }
    return true;
  }
}
