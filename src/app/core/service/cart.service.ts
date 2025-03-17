import { inject, Injectable } from '@angular/core';
import { Course } from '../interface/course';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  toastService = inject(ToastService);
  subtotal = 0;
  discount = 0;
  tax = 0;
  total = 0;
  cartItems: Course[] = [];

  getCartItems(): Course[] {
    const currentCart = localStorage.getItem('cart');
    return currentCart ? JSON.parse(currentCart) : [];
  }

  addToCart(course: Course) {
    const currentCart = localStorage.getItem('cart');
    let cart = currentCart ? JSON.parse(currentCart) : [];
    if (!Array.isArray(cart)) {
      cart = [];
    }
    const courseExists = cart.some((item: Course) => item.id === course.id);
    if (!courseExists) {
      cart.push(course);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.toastService.showSuccess('Course added to cart');
    } else {
      this.toastService.showWarning('This Course already in your cart');
    }
  }

  removeFromCart(courseId: string) {
    const currentCart = localStorage.getItem('cart');
    let cart = currentCart ? JSON.parse(currentCart) : [];
    if (Array.isArray(cart)) {
      cart = cart.filter((item: Course) => item.id !== courseId);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    return this.getCartItems();
  }

  calculateOrderTotals() {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    this.discount = this.cartItems.reduce((sum, item) => sum + item.discount, 0);
    this.tax = 20.00;
    this.total = this.subtotal - this.discount + this.tax;
  }

}
