import httpSchema from '@jswork/node-http-schema';
import { ApiInstance, ApiHandler, InitOptions, ApiOptions, Response } from './typing';

const options = {
  transformResponse: ({ data }) => data,
};

const defaults = {
  sdkKey: process?.env?.BARK_SDK_KEY,
  baseURL: 'https://api.day.app',
};

const defaultApiCallback: ApiHandler = (opts: ApiOptions) => Promise.resolve({} as Response);

export default class {
  public opts: InitOptions;
  public api: ApiInstance = {
    msg: defaultApiCallback,
    message: defaultApiCallback,
  };

  constructor(inOptions?: InitOptions) {
    this.opts = Object.assign({}, defaults, inOptions);
    if (!this.validate()) return;

    this.api = httpSchema(
      {
        host: this.opts.baseURL,
        request: [`/${this.opts.sdkKey}`, 'json'],
        items: [
          {
            items: {
              msg: ['post', '/{title}'],
              message: ['post', '/{title}/{body}'],
            },
          },
        ],
      },
      options
    );
  }

  public validate(): boolean | never {
    if (!this.opts.sdkKey) {
      throw new Error('sdkKey is required');
    }
    return true;
  }
}
