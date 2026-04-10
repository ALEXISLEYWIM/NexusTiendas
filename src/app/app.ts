import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CartDrawerComponent } from './shared/cart-drawer/cart-drawer.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CartDrawerComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-cart-drawer></app-cart-drawer>
    <main style="padding-top:64px; background:#0a0a0b; min-height:100vh;">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class App {}