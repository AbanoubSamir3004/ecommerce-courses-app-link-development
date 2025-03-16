import { Injectable } from '@angular/core';
import { SliderImage, SliderResponse } from '../interface/gallery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  sliderImages: SliderImage[] = [];
  currentIndex: number = 0;
  showFullscreenGallery: boolean = false;



  getSliderImages(): Observable<SliderResponse> {
   return this.http.get<SliderResponse>('https://api.npoint.io/8494c045d50509ba0d5a')
  }
}
