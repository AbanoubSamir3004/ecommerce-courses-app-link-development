import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopCoursesComponent } from "./top-courses/top-courses.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { GalleryFullscreenComponent } from './gallery/gallery-fullscreen/gallery-fullscreen.component';
import { GalleryService } from '../../../core/service/gallery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  imports: [CommonModule, TopCoursesComponent, GalleryComponent , GalleryFullscreenComponent]
})
export class HomeComponent {
  constructor(public galleryService:GalleryService) { }

  onCloseFullscreen(): void {
    this.galleryService.showFullscreenGallery = false;
  }
}

