import { Component, OnInit } from '@angular/core';
import { Course, CoursesResponse } from '../../../core/interface/course';
import { CourseService } from '../../../core/service/course.service';
import { CommonModule } from '@angular/common';
import { TopCoursesComponent } from "./top-courses/top-courses.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule, TopCoursesComponent]
})
export class HomeComponent {
  
}

