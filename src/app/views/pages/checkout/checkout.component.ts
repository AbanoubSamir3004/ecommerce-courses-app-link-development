import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { Router } from '@angular/router';
import { BreadcrumbItem } from '../../../core/interface/breadcrumb';
import { Course } from '../../../core/interface/course';
import { CartService } from '../../../core/service/cart.service';
import { CartCourseItemComponent } from '../cart/cart-course-item/cart-course-item.component';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PageTitleComponent,
    OrderDetailsComponent,
  ]
})
export class CheckoutComponent implements OnInit {
  items: BreadcrumbItem[] = [
    { label: 'Details', url: '/details' },
    { label: 'Shopping Cart', url: '/cart' },
    { label: 'Checkout', url: '/checkout', active: true }
  ];

  courseCount = 0;



  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartService.cartItems = this.cartService.getCartItems();
    if (this.cartService.cartItems.length > 0) {
      this.cartService.calculateOrderTotals();
    }
  }

   


  proceedToOrderComplete() {
    this.router.navigate(['/order-complete']);
  }


}
