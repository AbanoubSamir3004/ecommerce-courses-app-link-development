import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../../core/service/gallery.service';
import { SliderResponse } from '../../../../core/interface/gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit {


  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
    this.getSliderImages()
  }

  getSliderImages(): void {
    this.galleryService.getSliderImages().subscribe({
      next: (response: SliderResponse) => {
        this.galleryService.sliderImages = response.Slider;
      }
    });
  }

  nextSlide(): void {
    this.galleryService.currentIndex = (this.galleryService.currentIndex + 1) % this.galleryService.sliderImages.length;
  }

  prevSlide(): void {
    this.galleryService.currentIndex = (this.galleryService.currentIndex - 1 + this.galleryService.sliderImages.length) % this.galleryService.sliderImages.length;
  }

  getImageForPosition(position: number): string {
    const index = (this.galleryService.currentIndex + position) % this.galleryService.sliderImages.length;
    return this.galleryService.sliderImages[index].image;
  }

  openFullscreenGallery(): void {
    this.galleryService.showFullscreenGallery = true;
  }


}