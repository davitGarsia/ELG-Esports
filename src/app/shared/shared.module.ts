import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component/image-slider.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ImageSliderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [ImageSliderComponent, FooterComponent],
})
export class SharedModule {}
