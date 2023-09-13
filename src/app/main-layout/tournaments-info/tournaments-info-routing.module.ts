import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentInfoComponent } from './tournament-info/tournament-info.component';
import { InformationComponent } from './information/information.component';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RulesComponent } from './rules/rules.component';

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
      {
        path: 'leaderBoard',
        component: LeaderboardComponent,
      },
      {
        path: 'rules',
        component: RulesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsInfoRoutingModule {}
