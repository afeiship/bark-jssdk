# what is jest:
- https://www.cnblogs.com/Wolfmanlq/p/8012847.html

## 简介：
Jest是 `由Facebook发布的开源的、基于Jasmine的JavaScript单元测试框架` 。Jest源于Facebook两年前的构想，用于快速、可靠地测试Web聊天应用。它吸引了公司内部的兴趣，Facebook的一名软件工程师Jeff Morrison半年前又重拾这个项目，改善它的性能，并将其开源。Jest的目标是减少开始测试一个项目所要花费的时间和认知负荷，因此它提供了大部分你需要的现成工具：快速的命令行接口、Mock工具集以及它的自动模块Mock系统。此外，如果你在寻找隔离工具例如Mock库，大部分其它工具将让你在测试中（甚至经常在你的主代码中）写一些不尽如人意的样板代码，以使其生效。Jest与Jasmine框架的区别是在后者之上增加了一些层。最值得注意的是，运行测试时，Jest会自动模拟依赖。Jest自动为每个依赖的模块生成Mock，并默认提供这些Mock，这样就可以很容易地隔离模块的依赖。