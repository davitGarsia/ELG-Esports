import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentInfoComponent } from './tournament-info/tournament-info.component';
import { InformationComponent } from './information/information.component';
import { TeamsComponent } from './teams/teams.component';

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
        component: TeamsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsInfoRoutingModule {}
