import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
  Counter:  {{counter}}
  </p>
  <button (click)="increaseBy(1)" >+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy(1)" >-1</button>
  `
})

export class CounterComponent {

  constructor() { }


  public counter: number = 20;

  increaseBy( counter: number): void{
    this.counter += counter;
  }

  decreaseBy(value: number): void{
    this.counter -= value;
  }

  reset(): void{
    this.counter = 20;
  }

}
