import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',           loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'productos',  loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent) },
  { path: 'producto/:id', loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'checkout',   loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'login',      loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: '**',         redirectTo: '' }
];
