import { Component, OnInit } from '@angular/core';
import { Course, CoursesResponse } from '../../../../core/interface/course';
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

  courses: Array<Course> = []

  selectedCategory = 'all';
  filteredCourses: Array<Course> = [];

  constructor(private courseService: CourseService , private cartService:CartService) { }
  ngOnInit() {
    this.getCourses()
  }


  getCourses() {
    this.courseService.getCourses().subscribe({
      next: (response: CoursesResponse) => {
        this.courses = response.Courses
      },
      complete: () => {
        this.filterCourses('all');
      }
    })
  }



  filterCourses(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(course => course.category === category);
    }
  }

  addToCart(course: Course) {
    this.cartService.addToCart(course);
  }
}
