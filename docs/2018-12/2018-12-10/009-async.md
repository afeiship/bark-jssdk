# async:

## 回调函数：
问题在于一旦fetchData执行结束，此测试就在没有调用回调函数前结束。
还有另一种形式的 test，解决此问题。 使用单个参数调用 done，而不是将测试放在一个空参数的函数。 Jest会等done回调函数执行结束后，结束测试。

```js
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }
  fetchData(callback);
});
```


## Promises

如果您的代码使用 Promises，还有一个更简单的方法来处理异步测试。 只需要从您的测试返回一个 Promise, Jest 会等待这一 Promise 来解决。 如果承诺被拒绝，则测试将自动失败。

### promise resolve:
举个例子，比方说，fetchData，使用 Promise 代替回调的话，返回值是应该解析为字符串 'peanut butter' 的 Promise 。我们可以使用下面的测试代码︰
```js
test('the data is peanut butter', () => {
  expect.assertions(1);
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
```

### promise reject:
如果你想要 Promise 被拒绝，使用 .catch 方法。 请确保添加 expect.assertions 来验证一定数量的断言被调用。 否则一个fulfilled态的 Promise 不会让测试失败
```js
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(e => expect(e).toMatch('error'));
});
```

