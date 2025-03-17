import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { Router } from '@angular/router';
import { BreadcrumbItem } from '../../../core/interface/breadcrumb';
import { Course } from '../../../core/interface/course';
import { CartService } from '../../../core/service/cart.service';
import { CartCourseItemComponent } from '../cart/cart-course-item/cart-course-item.component';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    PageTitleComponent,
    OrderDetailsComponent,
    ReactiveFormsModule,
    RadioButtonModule,
    InputTextModule,
    InputMaskModule
  ],
  providers: [CartService]
})
export class CheckoutComponent implements OnInit {
  items: BreadcrumbItem[] = [
    { label: 'Details', url: '/details' },
    { label: 'Shopping Cart', url: '/cart' },
    { label: 'Checkout', url: '/checkout', active: true }
  ];

  checkoutForm!: FormGroup;
  paymentMethod: string = 'credit';

  constructor(
    public cartService: CartService, 
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.cartService.cartItems = this.cartService.getCartItems();
    if (this.cartService.cartItems.length > 0) {
      this.cartService.calculateOrderTotals();
    }else{
      this.router.navigate(['/cart']);
    }
    
    this.initForm();
  }

  initForm() {
    this.checkoutForm = this.fb.group({
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      paymentMethod: ['credit', [Validators.required]],
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]]
    });
  }

  get formControls() {
    return this.checkoutForm.controls;
  }

  onSubmit() {
    if (this.checkoutForm.invalid) {
      Object.keys(this.checkoutForm.controls).forEach(key => {
        const control = this.checkoutForm.get(key);
        control?.markAsTouched();
      });
      return;
    }
    
    // Process the form data
    console.log(this.checkoutForm.value);
    this.proceedToOrderComplete();
  }



  proceedToOrderComplete() {
    this.cartService.getCartItems();
    localStorage.removeItem('cart');
    this.router.navigate(['/order-complete']);
  }
}