import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { Course } from '../../../core/interface/course';
import { CommonModule } from '@angular/common';
import { BreadcrumbItem } from '../../../core/interface/breadcrumb';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CartService } from '../../../core/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PageTitleComponent,
    OrderDetailsComponent
  ]
})
export class CartComponent implements OnInit {
  items: BreadcrumbItem[] = [
    { label: 'Categories', url: '/categories' },
    { label: 'Details', url: '/details' },
    { label: 'Shopping Cart', url: '/cart', active: true }
  ];

  cartItems: Course[] = [];
  courseCount = 0;

  subtotal = 0;
  discount = 0;
  tax = 0;
  total = 0;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit() {
    this.loadCartItems();
    if (this.cartItems.length > 0) {
      this.calculateOrderTotals();
    }
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
    this.courseCount = this.cartItems.length;
  }

  calculateOrderTotals() {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    this.discount = this.cartItems.reduce((sum, item) => {
      const itemDiscount = (item.price * item.discount) / 100;
      return sum + itemDiscount;
    }, 0);
    this.tax = 20.00;
    this.total = this.subtotal - this.discount + this.tax;
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }

  removeFromCart(courseId: string) {
    this.cartService.removeFromCart(courseId);
    this.loadCartItems();
    this.calculateOrderTotals();
  }
}
