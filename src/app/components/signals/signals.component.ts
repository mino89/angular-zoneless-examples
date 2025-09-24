import { Component, signal } from '@angular/core';

@Component({
  selector: 'ex-signals',
  template: `
    <h2>Signals Component</h2>
    <h3>Count: {{count()}}</h3>
    <button (click)="increment()">Increment</button>
  `,
})
export class SignalsComponent {
  count = signal(0);

  increment() {
    this.count.update(c => c + 1);
  }
}
