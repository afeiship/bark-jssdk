# bark-jssdk
> Bark sdk for js.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/bark-jssdk
```

## usage
```js
import BarkJssdk from '@jswork/bark-jssdk';

const sdk = new BarkJssdk({ sdkKey: 'YOUR_SDK_KEY'});

sdk.api.msg({ title: 'New message comming.' });
sdk.api.message({ title: 'Tips', body: 'New message comming.' });
```

## license
Code released under [the MIT license](https://github.com/afeiship/boilerplate-typescript-package/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@boilerplate-scope/boilerplate-typescript-package
[version-url]: https://npmjs.org/package/@boilerplate-scope/boilerplate-typescript-package

[license-image]: https://img.shields.io/npm/l/@boilerplate-scope/boilerplate-typescript-package
[license-url]: https://github.com/afeiship/boilerplate-typescript-package/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@boilerplate-scope/boilerplate-typescript-package
[size-url]: https://github.com/afeiship/boilerplate-typescript-package/blob/master/dist/boilerplate-typescript-package.min.js

[download-image]: https://img.shields.io/npm/dm/@boilerplate-scope/boilerplate-typescript-package
[download-url]: https://www.npmjs.com/package/@boilerplate-scope/boilerplate-typescript-package
