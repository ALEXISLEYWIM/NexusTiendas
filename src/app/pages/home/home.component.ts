import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featured: Product[] = [];
  onSale:   Product[] = [];

  categories = [
    { name:'Laptops',     icon:'💻', count:124 },
    { name:'Smartphones', icon:'📱', count:89  },
    { name:'Audio',       icon:'🎧', count:67  },
    { name:'Monitores',   icon:'🖥', count:43  },
    { name:'Gaming',      icon:'🎮', count:98  },
    { name:'Accesorios',  icon:'⌨️', count:201 },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeatured().subscribe(p => this.featured = p);
    this.productService.getOnSale().subscribe(p => this.onSale = p.slice(0, 4));
  }
}
