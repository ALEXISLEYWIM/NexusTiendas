import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  qty = 1;
  selectedStorage = '';
  selectedColor = 'silver';
  loading = true;

  storageOptions = ['256 GB', '512 GB', '1 TB'];
  colors = [
    { id:'silver', hex:'#c0c0c0', label:'Plata' },
    { id:'black',  hex:'#2a2a2a', label:'Negro' },
    { id:'gold',   hex:'#c0a882', label:'Dorado' },
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe(p => {
      this.product = p;
      this.loading = false;
      if (p) this.selectedStorage = this.storageOptions[0];
    });
  }

  changeQty(d: number): void { this.qty = Math.max(1, this.qty + d); }
  addToCart(): void { if (this.product) this.cartService.addItem(this.product); }
  getDiscount(): number {
    if (!this.product?.oldPrice) return 0;
    return Math.round((1 - this.product.price / this.product.oldPrice) * 100);
  }
  getStars(): string[] { return Array(this.product?.stars || 0).fill('s'); }
  getSpecEntries(): { key: string; value: string }[] {
    if (!this.product?.specs) return [];
    return Object.entries(this.product.specs)
      .filter(([, v]) => v)
      .map(([k, v]) => ({ key: k, value: v as string }));
  }
}
