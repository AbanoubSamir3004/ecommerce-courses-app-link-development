import { Injectable } from '@angular/core';
import { Course } from '../interface/course';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subtotal = 0;
  discount = 0;
  tax = 0;
  total = 0;
  cartItems: Course[] = [];

  constructor() { }

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
    this.discount = this.cartItems.reduce((sum, item) => {
      const itemDiscount = (item.price * item.discount) / 100;
      return sum + itemDiscount;
    }, 0);
    this.tax = 20.00;
    this.total = this.subtotal - this.discount + this.tax;
  }

}
