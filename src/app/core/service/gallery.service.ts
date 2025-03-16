import { Injectable } from '@angular/core';
import { SliderImage } from '../interface/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }
  sliderImages: SliderImage[] = [];
  currentIndex: number = 0;
  showFullscreenGallery: boolean = false;
}
