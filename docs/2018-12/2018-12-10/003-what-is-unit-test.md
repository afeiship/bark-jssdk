# what is unit test:
- https://www.cnblogs.com/harlanc/p/6838155.html

## 定义：
可测试代码的最小的一部分。通常是一个单一的方法，不会使用其它方法或者类。非常快！上千个单元测试能够在10秒以内跑完！

## 单元测试永远不会使用：
- 数据库
- 一个app服务器（或者任何类型的服务器）
- 文件/网络 I/O或者文件系统
- 另外的应用
- 控制台（System.out,system.err等等）
- 日志
- 大多数其他类（但不包括DTO‘s，String,Integer,mock和一些其他的类）
- 单元测试几乎总是回归测试套件（regression suite）的一部分。