# mlin-cli

## What & why

通过简单的命令能快速搭建一个适合的项目结构，只需对结构稍作修改即可，极大的减少了重复工作，提升效率。



## How

### 原理

1. 完整项目结构的模板内置在脚手架中，一起随脚手架下载到本地，采用本地离线的方式自动生成（复制）相关的项目结构，适用性不强且占用磁盘。
2. 完整项目结构的模板部署在远程仓库，通过内部封装，执行命令时从远程仓库拉取到指定目录，生成完整的项目。

### 相关依赖

- 环境

  Node + npm

- ECMAScript

  ES6

- 依赖模块

  - chalk

    命令行彩色输出

  - cli-table

    命令行呈现 unicode 辅助表

  - commander

    命令行工具

  - download-git-repo

    从 node 下载并提取 git 库

  - inquirer

    常见的交互式命令行用户接口的集合

  - ora

    终端 Loading

注：

1. templateUrl 可以是 SSH 或者 HTTPS
2. 支持对模块的增删改查