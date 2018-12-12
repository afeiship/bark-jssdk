# resolves/rejects:

## .resolves / .rejects

您还可以使用 .resolves 匹配器在您期望的声明，Jest 会等待这一 Promise 来解决。如果 Promise 被拒绝，则测试将自动失败。
```js
test('the data is peanut butter', () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe('peanut butter');
});
```
一定要返回承诺 - 如果你省略 return 语句，您的测试将在 fetchData 完成之前完成。

如果你想要 Promise 被拒绝，使用 .catch 方法。 它参照工程 .resolves 匹配器。 如果 Promise 被拒绝，则测试将自动失败。
```js
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return expect(fetchData()).rejects.toMatch('error');
});
```

