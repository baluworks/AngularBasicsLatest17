import { Injectable } from '@angular/core';
import { Product } from '../mockdata/products';
import { HttpClient } from '@angular/common/http';

export interface Pricing {
  type: String;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

  getShippingPrice() {
    return this.http.get<Pricing[]>('../../assets/shipping.json');
  }
  addTocart(item: Product) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
