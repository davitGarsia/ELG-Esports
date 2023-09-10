import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider.component/image-slider.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ImageSliderComponent, FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ImageSliderComponent, FooterComponent, HeaderComponent],
})
export class SharedModule {}
