import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

export type NavConfig = {
  label: string,
  url: string[]
}

@Component({
  selector: 'ex-navigation',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      @for( item of nav(); track $index){
        <a [routerLink]="item.url">{{item.label}}</a>
      }
    </nav>
  `,
  styles: `
    nav{
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
    }
  `
})
export class NavigationComponent {
  nav = input<NavConfig[]>([])
}
