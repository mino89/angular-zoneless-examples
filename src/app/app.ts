import { NgDocRootComponent, NgDocNavbarComponent, NgDocSidebarComponent , NgDocThemeToggleComponent} from "@ng-doc/app";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  } from "../../node_modules/@ng-doc/app/components/theme-toggle/index";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    NgDocThemeToggleComponent
],
  template: ` 
    <ng-doc-root>
      <ng-doc-navbar>
        <div ngDocNavbarLeft><h1 class="brand">Zoneless <small>Examples</small></h1></div>
        <div ngDocNavbarRight class="ng-doc-header-controls ng-trigger ng-trigger-preventInitialChild"><ng-doc-theme-toggle/></div>
      </ng-doc-navbar>
      <ng-doc-sidebar/>
      <router-outlet/>
    </ng-doc-root>
   `,
})
export class App {
  protected readonly title = signal('examples');
}
