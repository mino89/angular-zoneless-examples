import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavConfig, NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    RouterOutlet
],
  template: ` <h1>Zoneless Examples</h1>
  <ex-navigation [nav]="navConfig"/>
    <router-outlet/>
   `,
})
export class App {
  protected readonly title = signal('examples');
  protected readonly navConfig: NavConfig[] = [
    {
      label: "ChangeDetectorRef",
      url: ["change-detector-ref"]
    },
    {
      label: "ApplicationRef",
      url: ["application-ref"]
    },
    {
      label: "Signals",
      url: ["signals"]
    },
    {
      label: "AsyncPipe",
      url: ["async-pipe"]
    }
  ]
}
