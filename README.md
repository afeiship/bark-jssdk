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
// send a message
sdk.message({ title: 'Tips', body: 'New message comming.' });
```

## resources
- https://github.com/Finb/Bark
- https://day.app/2021/06/barkfaq/

## license
Code released under [the MIT license](https://github.com/afeiship/bark-jssdk/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/bark-jssdk
[version-url]: https://npmjs.org/package/@jswork/bark-jssdk

[license-image]: https://img.shields.io/npm/l/@jswork/bark-jssdk
[license-url]: https://github.com/afeiship/bark-jssdk/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/bark-jssdk
[size-url]: https://github.com/afeiship/bark-jssdk/blob/master/dist/bark-jssdk.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/bark-jssdk
[download-url]: https://www.npmjs.com/package/@jswork/bark-jssdk
