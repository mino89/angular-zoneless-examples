import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { TimerService } from '../../core/timer.service';

@Component({
  selector: 'ex-change-detector-ref',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule],
  template: `
    <h2>ChangeDetectorRef</h2>
    <h3>Counter: {{ count }}</h3>
    <button (click)="reload()">{{ enableCdr ? 'stop' : 'start'}}</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class ChangeDetectorRefComponent implements OnInit, OnDestroy {
  count = 0;
  enableCdr = false;

  constructor(private cdr: ChangeDetectorRef, private timer: TimerService) {}

  ngOnInit() {
    this.autoIncrement(this.enableCdr);
  }

  reload() {
    this.enableCdr = !this.enableCdr;
    this.ngOnInit();
  }

  autoIncrement(markForCheck: boolean = false) {
    if (this.timer.intervalId) this.timer.stop();
    this.timer.start(() => {
      this.count++;
      console.log('Count:', this.count, 'MarkForCheck:', markForCheck);
      if (markForCheck) this.cdr.markForCheck();
    });
  }

  reset() {
    this.count = 0;
    this.enableCdr = false;
    this.timer.stop();
    this.cdr.markForCheck();
  }
  ngOnDestroy() {
    this.reset();
  }
}
