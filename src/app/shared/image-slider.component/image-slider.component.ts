import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from '../../core/interfaces/slide.interface';
import { Subject, Subscription, interval, take, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  @Input() slides!: string[];

  // slides: SlideInterface[] = [
  //   {
  //     url: '../../assets/slider-images/slider-1.png',
  //     title: 'slider-1',
  //   },
  //   { url: '../../assets/slider-images/slider-2.png', title: 'slider-2' },
  //   { url: '../../assets/slider-images/slider-3.png', title: 'slider-3' },
  // ];

  currentIndex: number = 0;
  sub$ = new Subject();

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex]}')`;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  ngOnInit() {
    // Call goToSlide every 2 seconds
    // const timer = interval(3000);
    // timer.pipe(takeUntil(this.sub$)).subscribe(() => {
    //   this.goToNextSlide();
    // });
    console.log(this.slides);
  }
  goToNextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}
