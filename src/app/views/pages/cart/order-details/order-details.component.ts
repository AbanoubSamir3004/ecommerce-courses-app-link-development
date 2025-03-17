import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.sass'],
  imports: [
    CommonModule
  ]
})
export class OrderDetailsComponent {

  @Input() subtotal: number = 0;
  @Input() discount: number = 0;
  @Input() tax: number = 0;
  @Input() total: number = 0;

  @Output() checkout = new EventEmitter<void>();

  onCheckout() {
    this.checkout.emit();
  }
}
