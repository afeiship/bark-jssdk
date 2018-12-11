# Truthiness

在测试中，你有时需要区分 undefined、 null，和 false，但有时你又不需要区分。 Jest 让你明确你想要什么。

- toBeNull 只匹配 null
- toBeUndefined 只匹配 undefined
- toBeDefined 与 toBeUndefined 相反
- toBeTruthy 匹配任何 if 语句为真
- toBeFalsy 匹配任何 if 语句为假

