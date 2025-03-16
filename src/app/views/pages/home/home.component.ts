import { Component, OnInit } from '@angular/core';
import { Course, CoursesResponse } from '../../../core/interface/course';
import { CourseService } from '../../../core/service/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  courses: Array<Course> = []

  selectedCategory = 'all';
  filteredCourses: Array<Course> = [];

  ngOnInit() {
    this.getCourses()
  }

  constructor(private courseService: CourseService) { }

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
}

