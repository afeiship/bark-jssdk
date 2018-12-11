// 普通匹配器
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// toEqual 递归检查对象或数组的每个字段
test('object assign', () => {
    const obj = { name: 'test' };
    obj.data = 123;
    expect(obj).toEqual({ name: 'test', data: 123 })
})

// expect.not
test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

// Truthiness
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});