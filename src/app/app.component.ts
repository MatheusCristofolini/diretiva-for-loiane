import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-diretiva-for></app-diretiva-for>
    `
})
export class AppComponent {
  title = 'diretiva-for-loiane';
}
