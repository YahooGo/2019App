# Angular820191006

## 系统学习Angular第一天

> 创建组件： `ng g c components/MyComponentName`
在组件内新建文件index.ts 导出组件所有内容以减少路径引用每级文件都有

> 指令ngFor循环 指令ngIf

```
<div *ngIf="条件判断" else elseContent>
条件判断为真时显示
</div>
<ng-template #elseContent>
条件为假时显示
</ng-template>
```






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
