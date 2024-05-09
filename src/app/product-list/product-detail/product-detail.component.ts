import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../mockdata/products';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const prodID = Number(routeParams.get('productId'));
    this.product = products.find((prod) => prod.id === prodID);
    console.log(this.product);
  }

  addToCart(product: Product) {
    this.cartService.addTocart(product);
    window.alert('Your product has been added to the cart!');
  }
}
