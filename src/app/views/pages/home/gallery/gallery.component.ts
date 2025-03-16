import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
interface SliderImage {
  id: number;
  image: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit {
  sliderImages: SliderImage[] = [];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // في الحالة الحقيقية، ستقوم بجلب البيانات من خلال خدمة API
    const apiData = {"Slider":[
      {"id":1,"image":"https://i.postimg.cc/L4PYJnt2/slider1.png"},
      {"id":2,"image":"https://i.postimg.cc/rFCD93ZH/slider-2.png"},
      {"id":3,"image":"https://i.postimg.cc/VkK5xM8B/slider-3.png"},
      {"id":4,"image":"https://i.postimg.cc/SKjjksQ0/slider-4.png"},
      {"id":5,"image":"https://i.postimg.cc/7PShxj4L/slider-5.png"}
    ]};
    
    this.sliderImages = apiData.Slider;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.sliderImages.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getImageForPosition(position: number): string {
    // حساب مواضع الصور في الخلفية
    // الصور الخلفية تكون هي الصور التالية للصورة الحالية
    const index = (this.currentIndex + position) % this.sliderImages.length;
    return this.sliderImages[index].image;
  }
}