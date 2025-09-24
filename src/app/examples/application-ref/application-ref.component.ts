import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TimerService } from '../../core/timer.service';



@Component({
  selector: 'ex-application-ref-external',
  template: `
    <h2>Internal Example</h2>
    <p>Random: {{ randomValue }}</p>
  `,
})
export class ApplicationRefExternallComponent implements OnInit, OnDestroy {
  randomValue = 0;
  constructor(private timer: TimerService) {}

  ngOnInit(): void {
    this.timer.start(() => {
      this.randomValue = Math.floor(Math.random() * 100);
      console.log('Random Value', this.randomValue, new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    this.timer.stop();
  }
}

@Component({
  selector: 'ex-application-ref',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ApplicationRefExternallComponent],
  template: `
    <h2>ApplicationRef</h2>
    <button (click)="update()">Update child value</button>
    <ex-application-ref-external />
  `,
})
export class ApplicationRefComponent {
  constructor(private appRef: ApplicationRef) {}

  update() {
    console.log('Calling appRef.tick()');
    this.appRef.tick();
  }
}
