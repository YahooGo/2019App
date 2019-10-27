import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

/**
 * ## 指令
 * `[appGridItem]` 由[]包裹表示属性
 * @description：指令本身没有模板需要寄宿在模板上成为模板的属性
 */
@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {
  /**
   * 我们要操作html模板需要两个工具
   * ElementRef => Angular中的html模板别称
   * Renderer2
   */
  constructor(
    private elr: ElementRef,
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
    this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
    this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
    this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
  }
}
