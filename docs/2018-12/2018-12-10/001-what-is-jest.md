# what is jest:
- https://www.cnblogs.com/Wolfmanlq/p/8012847.html

## 简介：
Jest是 `由Facebook发布的开源的、基于Jasmine的JavaScript单元测试框架` 。Jest源于Facebook两年前的构想，用于快速、可靠地测试Web聊天应用。它吸引了公司内部的兴趣，Facebook的一名软件工程师Jeff Morrison半年前又重拾这个项目，改善它的性能，并将其开源。Jest的目标是减少开始测试一个项目所要花费的时间和认知负荷，因此它提供了大部分你需要的现成工具：快速的命令行接口、Mock工具集以及它的自动模块Mock系统。此外，如果你在寻找隔离工具例如Mock库，大部分其它工具将让你在测试中（甚至经常在你的主代码中）写一些不尽如人意的样板代码，以使其生效。Jest与Jasmine框架的区别是在后者之上增加了一些层。最值得注意的是，运行测试时，Jest会自动模拟依赖。Jest自动为每个依赖的模块生成Mock，并默认提供这些Mock，这样就可以很容易地隔离模块的依赖。

## 为什么选择Jest？
1. Jest 可以利用其特有的`快照测试`功能，通过比对 UI 代码生成的快照文件，`实现对 React 等常见框架的自动测试`。此外， Jest 的测试用例是并行执行的，而且只执行发生改变的文件所对应的测试，提升了测试速度
2. 安装配置简单，非常容易上手，`几乎是零配置的`，通过npm 命令安装就可以直接运行了
3. Jest `内置了测试覆盖率工具istanbul`，可以通过命令开启或者在 package.json 文件进行更详细的配置。运行 istanbul 除了会再终端展示测试覆盖率情况，还会在项目下生产一个 coverage 目录，内附一个测试覆盖率的报告，让我们可以清晰看到分支的代码的测试情况。
4. 集成了断言库，不需要再引入第三方的断言库，并且非常`完美的支持React组件化`测试


## 运行 jest:
```shell
 ./node_modules/.bin/jest sum.test.js
```

## 或者npm test:
```json
{
    "scripts": {
        "test": "jest"
    }
}
```