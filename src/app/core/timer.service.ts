import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public intervalId?: number;

  start(callback: () => void, interval: number = 1000) {
    this.intervalId = setInterval(callback, interval);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
