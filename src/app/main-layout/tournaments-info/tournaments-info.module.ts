import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { TournamentsInfoRoutingModule } from './tournaments-info-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TournamentsInfoRoutingModule,
    RouterModule,
    SharedModule,
  ],
})
export class TournamentsInfoModule {}
