# Angular-PrimeNG

# 设计方案
Bootstrap + primeNG

## 挂代理

```
直接执行 npm run link:taobao

 以下是说明:
 淘宝 npm 地址：
 http://npm.taobao.org/

 临时使用命令
 npm --registry https://registry.npm.taobao.org install
 yarn --registry https://registry.npm.taobao.org install
 设置成永久配置
 npm config set registry https://registry.npm.taobao.org

 验证安装成功：
 npm config get registry
 安装成功会输出: https://registry.npm.taobao.org
 或者 用 npm info express 应该也可以查看
```

## 模拟数据服务
> 使用json-server 工具

安装： 安装指令`yarn add json-server`
创建： 创建db.json文件用于定义mock数据
配置： 配置package.json 命令内部启动json-server 
运行： 运行指令`json-server --watch db.json`

## Modules 
用于存放页面级别组件

## Shared 共享模块
```
1. Layout 存放自定义共享组件
2. UI 用于存放UI框架组件
3. Service 用于存放服务【共享级别】
4. Pipes 用于存放管道【共享级别】
5. Http 用于存放 api 与 拦截器 
```

>【组件】不应该直接获取或保存数据，它们不应该了解是否在展示假数据。 它们应该聚焦于展示数据，而把数据访问的职责委托给某个服务。

>【服务】可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源。

>【注意】由于组件中获取数据为异步行为，服务必须具有某种形式的【异步函数签名】,它可以使用回调函数，可以返回 Promise（承诺），也可以返回 Observable（可观察对象）


## 组件一定要轻量级 / 服务才是重量级业务操作
该组件很快就会因为这些数据方式的细节而变得杂乱不堪。 组件变得难以理解、难以测试，并且这些数据访问逻辑无法被复用，也无法标准化。
这就是为什么最佳实践中要求把数据展现逻辑从数据访问逻辑中拆分出去，也就是说把数据访问逻辑包装进一个单独的服务中， 并且在组件中把数据访问逻辑委托给这个服务。
------

## Angular Cli 版本
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
