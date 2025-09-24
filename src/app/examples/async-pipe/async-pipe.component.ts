import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ex-async-pipe',
  imports: [CommonModule],
  template: `
    <h2>Async Pipe Component</h2>
    <h3>Count: {{count$ | async }}</h3>
    <button (click)="increment()">Increment</button>
  `,
})
export class AsyncPipeComponent {
  count$ = new BehaviorSubject(0);

  increment(){
    this.count$.next(this.count$.value + 1);
  }

}
