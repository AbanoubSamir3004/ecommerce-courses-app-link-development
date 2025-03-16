import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopCoursesComponent } from "./top-courses/top-courses.component";
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule, TopCoursesComponent, GalleryComponent]
})
export class HomeComponent {
  
}

