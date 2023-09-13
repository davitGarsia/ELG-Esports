import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { ShopComponent } from './shop/shop.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'tournaments', component: TournamentsComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'teams/:id', component: TeamInfoComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'schedule', component: ScheduleComponent },
    ],
  },
  {
    path: 'tournament-info',
    loadChildren: () =>
      import('./tournaments-info/tournaments-info.module').then(
        (m) => m.TournamentsInfoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
