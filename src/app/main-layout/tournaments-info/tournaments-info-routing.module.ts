import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentInfoComponent } from './tournament-info/tournament-info.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentInfoComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsInfoRoutingModule {}
