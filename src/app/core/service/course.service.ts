import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, CoursesResponse } from '../interface/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<CoursesResponse> {
    return this.http.get<CoursesResponse>('https://api.npoint.io/983f88db4d99fec8edd9')
  }

}
