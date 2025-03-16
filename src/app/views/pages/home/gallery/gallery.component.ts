import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../../core/service/gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit {


  constructor(public galleryService:GalleryService) { }

  ngOnInit(): void {
    const apiData = {"Slider":[
      {"id":1,"image":"https://i.postimg.cc/L4PYJnt2/slider1.png"},
      {"id":2,"image":"https://i.postimg.cc/rFCD93ZH/slider-2.png"},
      {"id":3,"image":"https://i.postimg.cc/VkK5xM8B/slider-3.png"},
      {"id":4,"image":"https://i.postimg.cc/SKjjksQ0/slider-4.png"},
      {"id":5,"image":"https://i.postimg.cc/7PShxj4L/slider-5.png"}
    ]};
    
    this.galleryService.sliderImages = apiData.Slider;
  }

  nextSlide(): void {
    this.galleryService.currentIndex = (this.galleryService.currentIndex + 1) % this.galleryService.sliderImages.length;
  }

  prevSlide(): void {
    this.galleryService.currentIndex = (this.galleryService.currentIndex - 1 + this.galleryService.sliderImages.length) % this.galleryService.sliderImages.length;
  }

  goToSlide(index: number): void {
    this.galleryService.currentIndex = index;
  }

  getImageForPosition(position: number): string {
    const index = (this.galleryService.currentIndex + position) % this.galleryService.sliderImages.length;
    return this.galleryService.sliderImages[index].image;
  }
  
  openFullscreenGallery(): void {
    this.galleryService.showFullscreenGallery = true;
  }
  
 
}