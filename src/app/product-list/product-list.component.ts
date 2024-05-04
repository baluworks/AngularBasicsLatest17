import { Component } from '@angular/core';
import { Product, products } from '../mockdata/products';
import { CommonModule } from '@angular/common';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductAlertsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  public productsList: Product[] = [];

  // Generate constructor with productList param
  constructor() {
    this.productsList = [...products];
  }

  // generate notifyMe event method
  onNotifyMe(event: Event) {
    console.log('Notify', event.type);
  }
  share() {}
}
