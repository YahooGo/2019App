import { Component, OnInit } from '@angular/core';

import { map, filter } from 'rxjs/operators';
import { from, of, Observable } from 'rxjs';


@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.scss']
})
export class Day1Component implements OnInit {
  public squareOdd$: any;
  public observable$: any;
  public createO$: any = new Observable();
  constructor() { }

  ngOnInit() {
    // 测试rxjs
    this.fun1();
    // 观察者对象创建
    // this.fun2();
    this.fun3();

  }

  fun1() {
    this.squareOdd$ = of(1, 2, 3, 4, 5)
      .pipe(
        map(n => n + 1)
      );

    this.getData1();
  }

  getData1() {
    // Subscribe to get values
    this.squareOdd$.subscribe(
      x => console.log(x),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  fun2() {
    this.observable$ = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    this.getData2();
  }

  getData2() {
    this.observable$.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
  }

  fun3() {
    this.observable$ = new Observable(observer => {

      // throw new Error();
      observer.next(1);
    });

    this.getData3();
  }

  getData3() {
    this.observable$.subscribe(
      res => console.log('res =>', res),
      err => console.log('err => ', err),
      () => console.log('end complete !!')
    )
  }

}
