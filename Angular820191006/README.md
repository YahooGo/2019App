# Angular820191006

## 版本
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## 系统学习Angular第一天

> 创建组件： `ng g c components/MyComponentName`
在组件内新建文件index.ts 导出组件所有内容以减少路径引用每级文件都有
使用index.ts有两个好处
1. 缩短引用的路径
2. 更好的封装，目录内部结构的变化不会影响外部

-----------------------------------------
> 指令ngFor循环 指令ngIf
```
<div *ngIf="条件判断" else elseContent>
条件判断为真时显示
</div>
<ng-template #elseContent>
条件为假时显示
</ng-template>
```
@Input 父组件向子组件传入数据的标识符
@Output 子组件向父组件传入数据的标识符
new EventEmitter() 事件发射器 为对象提供emit事件

-----------------------------------------
> 样式绑定

样式绑定三种绑定方式

```
[class.className] = "表达式"
class.className对于单个样式的条件绑定最合适

[ngClass] = {'One': true, 'Two': true,'Three': false}
ngClass 是自由度和扩展性最强的样式绑定方式

[ngStyle] = "{'color': someColor, 'font-size': fontSize}"
ngStyle 由于是嵌入式样式，会覆盖掉其他样式，慎用

```

------------------------------------------













