import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  { id:1,  name:'MacBook Pro 16"',       brand:'Apple',     category:'Laptops',      price:8499, oldPrice:9999, emoji:'💻', badge:'sale', stars:5, reviews:284,  stock:8,  description:'Laptop más potente con chip M3 Pro, pantalla Liquid Retina XDR y 22h de batería.', specs:{ cpu:'Apple M3 Pro', ram:'18 GB', screen:'16 Liquid Retina XDR', battery:'22 horas', os:'macOS Sonoma', storage:'512 GB SSD' } },
  { id:2,  name:'iPhone 15 Pro Max',      brand:'Apple',     category:'Smartphones',  price:5299, oldPrice:5999, emoji:'📱', badge:'hot',  stars:5, reviews:512,  stock:15, description:'iPhone con chip A17 Pro, cámara 48MP y Super Retina XDR 6.7".', specs:{ cpu:'A17 Pro', ram:'8 GB', screen:'6.7 Super Retina', battery:'29 horas', os:'iOS 17', storage:'256 GB' } },
  { id:3,  name:'Sony WH-1000XM5',        brand:'Sony',      category:'Audio',        price:1299, oldPrice:1599, emoji:'🎧', badge:'sale', stars:5, reviews:893,  stock:22, description:'Mejores auriculares con cancelación de ruido, 30h de batería y sonido Hi-Res.', specs:{ battery:'30 horas', os:'Android/iOS' } },
  { id:4,  name:'Samsung OLED 4K 55"',    brand:'Samsung',   category:'Monitores',    price:3899, oldPrice:4999, emoji:'🖥', badge:'new',  stars:4, reviews:167,  stock:6,  description:'Smart TV OLED con imagen perfecta, colores vibrantes y 4K a 120Hz.', specs:{ screen:'55 OLED 4K 120Hz', os:'Tizen OS' } },
  { id:5,  name:'PlayStation 5 Slim',     brand:'Sony',      category:'Gaming',       price:2299, oldPrice:2599, emoji:'🎮', badge:'hot',  stars:5, reviews:1204, stock:4,  description:'Consola con SSD ultra-rápido, ray tracing y haptic feedback en el DualSense.', specs:{ cpu:'AMD Zen 2 8-core', ram:'16 GB GDDR6', storage:'1 TB SSD', os:'PlayStation OS' } },
  { id:6,  name:'iPad Pro M4 13"',        brand:'Apple',     category:'Tablets',      price:6499, oldPrice:7199, emoji:'📟', badge:'new',  stars:5, reviews:341,  stock:10, description:'Tablet más potente con chip M4, Ultra Retina XDR OLED y ProMotion 120Hz.', specs:{ cpu:'Apple M4', ram:'16 GB', screen:'13 Ultra Retina XDR', battery:'10 horas', os:'iPadOS 17' } },
  { id:7,  name:'Galaxy S24 Ultra',       brand:'Samsung',   category:'Smartphones',  price:4799, oldPrice:5299, emoji:'📲', badge:'sale', stars:5, reviews:728,  stock:12, description:'Flagship Samsung con S Pen integrado, zoom óptico 10x y Dynamic AMOLED 2X.', specs:{ cpu:'Snapdragon 8 Gen 3', ram:'12 GB', screen:'6.8 AMOLED 120Hz', battery:'45h', os:'Android 14', storage:'256 GB' } },
  { id:8,  name:'Logitech MX Keys S',     brand:'Logitech',  category:'Accesorios',   price:399,  oldPrice:499,  emoji:'⌨️', stars:4, reviews:445,  stock:30, description:'Teclado inalámbrico premium con retroiluminación adaptativa y 10 días de batería.', specs:{ battery:'10 días', os:'Windows/macOS/Linux' } },
  { id:9,  name:'ASUS ROG Zephyrus G16',  brand:'ASUS',      category:'Laptops',      price:7299, oldPrice:8499, emoji:'🖥', badge:'hot',  stars:5, reviews:203,  stock:5,  description:'Laptop gaming ultra-delgada con RTX 4090 y pantalla QHD 240Hz para gaming pro.', specs:{ cpu:'AMD Ryzen 9 7940HS', ram:'32 GB DDR5', screen:'16 QHD 240Hz', battery:'8 horas', os:'Windows 11', storage:'1 TB NVMe' } },
  { id:10, name:'AirPods Pro 2da Gen',    brand:'Apple',     category:'Audio',        price:899,  oldPrice:1099, emoji:'🎵', badge:'sale', stars:5, reviews:1567, stock:25, description:'Earbuds con cancelación activa de ruido y hasta 30h de audio con el estuche.', specs:{ cpu:'Chip H2', battery:'30h con estuche', os:'iOS 17+' } },
  { id:11, name:'Dell UltraSharp 27"',    brand:'Dell',      category:'Monitores',    price:1899, oldPrice:2299, emoji:'🖱', badge:'new',  stars:4, reviews:312,  stock:9,  description:'Monitor profesional 4K IPS con 100% sRGB, ideal para diseño y fotografía.', specs:{ screen:'27 4K IPS 60Hz', os:'Compatible Universal' } },
  { id:12, name:'Xbox Series X',          brand:'Microsoft', category:'Gaming',       price:2199, oldPrice:2499, emoji:'🎯', stars:5, reviews:889,  stock:7,  description:'Consola más poderosa de Microsoft con 4K a 120fps y Quick Resume.', specs:{ cpu:'AMD Zen 2 8-core', ram:'16 GB GDDR6', storage:'1 TB NVMe', os:'Xbox OS' } },
];

@Injectable({ providedIn: 'root' })
export class ProductService {
  getAll():                   Observable<Product[]>           { return of(PRODUCTS); }
  getById(id: number):        Observable<Product | undefined> { return of(PRODUCTS.find(p => p.id === id)); }
  getByCategory(cat: string): Observable<Product[]>           { return cat === 'Todos' ? of(PRODUCTS) : of(PRODUCTS.filter(p => p.category === cat)); }
  getFeatured():              Observable<Product[]>           { return of(PRODUCTS.slice(0, 8)); }
  getOnSale():                Observable<Product[]>           { return of(PRODUCTS.filter(p => p.badge === 'sale' || p.badge === 'hot')); }
}
