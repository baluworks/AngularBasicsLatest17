import { Component, OnInit } from '@angular/core';
import { CartService, Pricing } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css',
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<Pricing[]>;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrice();
  }
}
