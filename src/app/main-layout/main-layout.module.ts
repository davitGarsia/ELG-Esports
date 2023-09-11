import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TournamentInfoComponent } from './tournaments-info/tournament-info/tournament-info.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    TournamentsComponent,
    TournamentInfoComponent,
    TeamsComponent,
    TeamInfoComponent,
  ],
  imports: [CommonModule, MainLayoutRoutingModule, SharedModule],
})
export class MainLayoutModule {}
