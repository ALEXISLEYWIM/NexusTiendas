import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  payMethod = 'card';
  form = { name:'', lastName:'', email:'', address:'', city:'', phone:'', cardNumber:'', cardExpiry:'', cardCvv:'' };
  ordered = false;

  constructor(public cartService: CartService, private router: Router) {}

  getIgv(): number  { return this.cartService.getTotal() * 0.18; }
  getGrand(): number { return this.cartService.getTotal() + this.getIgv(); }

  confirmOrder(): void {
    this.cartService.clearCart();
    this.ordered = true;
    setTimeout(() => this.router.navigate(['/']), 3000);
  }
}
