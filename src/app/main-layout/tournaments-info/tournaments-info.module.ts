import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';

import { TournamentsInfoRoutingModule } from './tournaments-info-routing.module';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  declarations: [TournamentTeamsComponent, RulesComponent],
  imports: [
    CommonModule,
    TournamentsInfoRoutingModule,
    RouterModule,
    SharedModule,
    MatTableModule,
  ],
})
export class TournamentsInfoModule {}
