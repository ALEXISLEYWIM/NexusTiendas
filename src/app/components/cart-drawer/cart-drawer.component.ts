import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.component.html',
  styleUrls: ['./cart-drawer.component.css']
})
export class CartDrawerComponent {
  constructor(public cartService: CartService, private router: Router) {}

  goCheckout(): void {
    this.cartService.closeCart();
    this.router.navigate(['/checkout']);
  }
}
