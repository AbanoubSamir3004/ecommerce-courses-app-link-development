import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, CoursesCategoryResponse, CoursesResponse } from '../interface/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CoursesResponse> {
    return this.http.get<CoursesResponse>('https://api.npoint.io/983f88db4d99fec8edd9')
  }

  getCategories(): Observable<CoursesCategoryResponse> {
    return this.http.get<CoursesCategoryResponse>('https://api.npoint.io/8378472d08789a9cb165')
  }
}
