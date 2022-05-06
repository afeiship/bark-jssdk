import httpSchema from '@jswork/node-http-schema';
import { ApiInstance, ApiHandler, InitOptions, defaultApiCallback } from './typing';

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
      msg: ['post', '/{title}/{body}'],
    },
  },
];

export default class {
  public opts: InitOptions;
  public msg: ApiHandler = defaultApiCallback;

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

  public validate(): boolean | never {
    if (!this.opts.sdkKey) {
      throw new Error('sdkKey is required');
    }
    return true;
  }
}
