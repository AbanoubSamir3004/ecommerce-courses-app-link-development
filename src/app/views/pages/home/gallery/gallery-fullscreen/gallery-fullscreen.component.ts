import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

interface SliderImage {
  id: number;
  image: string;
}

@Component({
  selector: 'app-gallery-fullscreen',
  templateUrl: './gallery-fullscreen.component.html',
  styleUrls: ['./gallery-fullscreen.component.sass'],
  imports: [CommonModule]
})
export class GalleryFullscreenComponent implements OnInit {
  @Input() images: SliderImage[] = [];
  @Input() startIndex: number = 0;
  @Output() close = new EventEmitter<void>();
  
  currentIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.currentIndex = this.startIndex;
    document.body.style.overflow = 'hidden'; // منع التمرير عند فتح المعرض
  }

  ngOnDestroy(): void {
    document.body.style.overflow = ''; // إعادة تمكين التمرير عند إغلاق المعرض
  }
  
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  
  goToSlide(index: number): void {
    this.currentIndex = index;
  }
  
  closeGallery(): void {
    this.close.emit();
  }
  
  // استمع إلى مفتاح Escape لإغلاق المعرض
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    this.closeGallery();
  }
  
  // استمع إلى مفاتيح الأسهم للتنقل
  @HostListener('document:keydown.arrowRight', ['$event'])
  handleRightArrow(event: KeyboardEvent): void {
    this.nextSlide();
  }
  
  @HostListener('document:keydown.arrowLeft', ['$event'])
  handleLeftArrow(event: KeyboardEvent): void {
    this.prevSlide();
  }
  
  // منع انتشار الأحداث خارج المعرض
  stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}