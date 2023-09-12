import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentInfoComponent } from './tournament-info/tournament-info.component';
import { InformationComponent } from './information/information.component';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentInfoComponent,
    children: [
      {
        path: 'information',
        component: InformationComponent,
      },
      {
        path: 'information/:id',
        component: InformationComponent,
      },
      {
        path: 'teams',
        component: TournamentTeamsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsInfoRoutingModule {}
