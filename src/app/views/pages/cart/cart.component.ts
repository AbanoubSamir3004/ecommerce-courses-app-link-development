import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { Course } from '../../../core/interface/course';
import { CommonModule } from '@angular/common';
import { BreadcrumbItem } from '../../../core/interface/breadcrumb';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';
import { CartService } from '../../../core/service/cart.service';
import { Router } from '@angular/router';
import { CartCourseItemComponent } from './cart-course-item/cart-course-item.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PageTitleComponent,
    OrderDetailsComponent,
    CartCourseItemComponent
  ]
})
export class CartComponent implements OnInit {
  items: BreadcrumbItem[] = [
    { label: 'Categories', url: '/categories' },
    { label: 'Details', url: '/details' },
    { label: 'Shopping Cart', url: '/cart', active: true }
  ];

  courseCount = 0;



  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.loadCartItems();
    if (this.cartService.cartItems.length > 0) {
      this.cartService.calculateOrderTotals();
    }
  }

  loadCartItems() {
    this.cartService.cartItems = this.cartService.getCartItems();
    this.courseCount = this.cartService.cartItems.length;
  }



  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }

  removeFromCart(courseId: string) {
    this.cartService.removeFromCart(courseId);
    this.loadCartItems();
    this.cartService.calculateOrderTotals();
  }
}