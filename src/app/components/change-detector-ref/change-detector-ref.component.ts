import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ex-change-detector-ref',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, FormsModule],
  template: `
    <h2>ChangeDetectorRef</h2>
    <h3>Counter: {{ count }}</h3>
    <button #exButton>Increment</button>
    <input type="checkbox" [(ngModel)]="enableCdr" /> Enable CDR
  `,
})
export class ChangeDetectorRefComponent implements AfterViewInit {
  count = 0;
  enableCdr = false;
  @ViewChild('exButton') exButton!: ElementRef<HTMLButtonElement>;
  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit(): void {
    this.exButton.nativeElement.addEventListener('click', () => this.increment());
  }

  increment() {
    this.count++;
    console.log('Incremented:', this.count);
    this.enableCdr && this.cdr.markForCheck();
  }
}
