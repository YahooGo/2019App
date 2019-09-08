# Angular-PrimeNG

# 设计方案

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
