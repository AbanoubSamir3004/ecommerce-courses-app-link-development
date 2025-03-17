import { Component, OnInit } from '@angular/core';
import { Category, Course, CoursesCategoryResponse, CoursesResponse } from '../../../../core/interface/course';
import { CourseService } from '../../../../core/service/course.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../core/service/cart.service';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.sass'],
  imports: [CommonModule]
})
export class TopCoursesComponent implements OnInit {
  courses: Array<Course> = [];
  categories: Array<Category> = [];

  selectedCategory = 'all';
  filteredCourses: Array<Course> = [];

  constructor(private courseService: CourseService, private cartService: CartService) { }

  ngOnInit() {
    this.getCourses();
    this.getCategories();
  }

  getCourses() {
    this.courseService.getCourses().subscribe({
      next: (response: CoursesResponse) => {
        this.courses = response.Courses;
      },
      complete: () => {
        this.filterCourses('all');
      }
    });
  }

  getCategories() {
    this.courseService.getCategories().subscribe({
      next:(res: CoursesCategoryResponse) => {
        this.categories = res.Categories;
      }
    });
  }

  filterCourses(category: string) {
    console.log(category);
    this.selectedCategory = category;
    if (category.toLocaleLowerCase() === 'all') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.category === category);
    }
  }

  addToCart(course: Course) {
    this.cartService.addToCart(course);
  }
}