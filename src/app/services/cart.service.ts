import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  private openSubject  = new BehaviorSubject<boolean>(false);

  cart$   = this.itemsSubject.asObservable();
  isOpen$ = this.openSubject.asObservable();

  addItem(product: Product): void {
    const current = this.itemsSubject.getValue();
    const found   = current.find(i => i.id === product.id);
    if (found) { found.qty++; this.itemsSubject.next([...current]); }
    else        { this.itemsSubject.next([...current, { ...product, qty: 1 }]); }
    this.openCart();
  }

  removeItem(id: number): void {
    this.itemsSubject.next(this.itemsSubject.getValue().filter(i => i.id !== id));
  }

  updateQty(id: number, qty: number): void {
    if (qty <= 0) { this.removeItem(id); return; }
    this.itemsSubject.next(this.itemsSubject.getValue().map(i => i.id === id ? { ...i, qty } : i));
  }

  getTotal():  number { return this.itemsSubject.getValue().reduce((s,i) => s + i.price * i.qty, 0); }
  getCount():  number { return this.itemsSubject.getValue().reduce((s,i) => s + i.qty, 0); }
  clearCart(): void   { this.itemsSubject.next([]); }
  openCart():  void   { this.openSubject.next(true); }
  closeCart(): void   { this.openSubject.next(false); }
}
