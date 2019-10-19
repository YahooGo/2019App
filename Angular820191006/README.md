# Angular820191006

## 版本
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## 系统学习Angular

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

> 组件的生命周期

```
// 声明周期是可选的 构造函数必有 
constructor 构造函数永远首先被调用
ngOnChanges 输入属性变化时被调用
ngOnInit    组件初始化完成时被调用
ngDoCheck   脏值检测时调用

ngAfterContentInit    当内容投影ng-content完成时调用
ngAfterContentChecked Angular检测投影内容时调用(多次)
ngAfterViewInit       当组件视图(子视图)初始化完成时
ngAfterVIewChecked    当检查视图变化时(多次)

ngOnDestory           当组件销毁时
```

> @Input()输入值尽量使用get/set拦截，可以少写生命周期
```
  // 初始化时先声明内部属性 tabOpt
  tabOpt: Options = {};
  // 输入属性
  @Input()
  set Options(data: Options) {
    this.tabOpt = Object.assign(this.tabOpt, data);
  }
  get Options() {
    return this.tabOpt;
  }
```

> 模板在组件类中的引用
```
<div #helloDiv></div>
// `#`后面是给模板或DOM元素起一个引用名字，变可以在组件类或模板中进行，注意唯一

exportt class AppComponent {
  @ViewChild('helloDiv') helloDivRef: ElementRef;
  // @ViewChild是一个选择器，用来查找要引用的DOM元素或者组件
  // ElementRef 是DOM元素的一个包装类
  // 因为DOM元素不是Angular中的类，所以用一个包装类在Angular中使用和表示其他类型
  // helloDiv是模板引用变量名，helloDivRef是类中别名

}

```






