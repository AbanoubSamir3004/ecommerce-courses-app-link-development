import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../../core/interface/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-course-item',
  templateUrl: './cart-course-item.component.html',
  styleUrls: ['./cart-course-item.component.sass'],
  imports: [CommonModule]
})
export class CartCourseItemComponent   {
  @Input() course!: Course;
  @Output() remove = new EventEmitter<string>();
  
  stars = [1, 2, 3, 4, 5];

  removeFromCart(courseId: string) {
    this.remove.emit(courseId);
  }
}
