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
  courses:Array<Course> = []
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.getCourses()
  }
  getCourses() {
    this.courseService.getCourses().subscribe({
      next: (response: CoursesResponse) => {
        this.courses = response.Courses
      },

    })
  }


}
