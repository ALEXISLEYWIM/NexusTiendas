import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  wished = false;

  constructor(private cart: CartService, private router: Router) {}

  addToCart(e: Event): void { e.stopPropagation(); this.cart.addItem(this.product); }
  toggleWish(e: Event): void { e.stopPropagation(); this.wished = !this.wished; }
  goToDetail(): void { this.router.navigate(['/producto', this.product.id]); }

  getDiscount(): number {
    if (!this.product.oldPrice) return 0;
    return Math.round((1 - this.product.price / this.product.oldPrice) * 100);
  }
  getStars(): number[] { return Array(this.product.stars).fill(0); }
}
