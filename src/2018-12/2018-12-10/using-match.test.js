// 普通匹配器
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// toEqual 递归检查对象或数组的每个字段
test('object assign', () => {
    const obj = { name:'test'};
    obj.data = 123;
    expect(obj).toEqual({ name:'test', data: 123 })
})