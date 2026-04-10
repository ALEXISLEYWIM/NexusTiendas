import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  allProducts: Product[] = [];
  filtered:    Product[] = [];
  selectedCat = 'Todos';
  sortBy = 'popular';
  loading = true;

  categories = ['Todos','Laptops','Smartphones','Audio','Gaming','Monitores','Accesorios'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.allProducts = data;
      this.filtered = data;
      this.loading = false;
    });
  }

  filterBy(cat: string): void {
    this.selectedCat = cat;
    this.applyFilters();
  }

  applyFilters(): void {
    let result = this.selectedCat === 'Todos'
      ? [...this.allProducts]
      : this.allProducts.filter(p => p.category === this.selectedCat);
    if (this.sortBy === 'price-asc')  result.sort((a,b) => a.price - b.price);
    if (this.sortBy === 'price-desc') result.sort((a,b) => b.price - a.price);
    this.filtered = result;
  }
}
