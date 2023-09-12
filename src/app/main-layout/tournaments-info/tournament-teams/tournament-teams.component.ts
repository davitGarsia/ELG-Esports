import { Component } from '@angular/core';
import { TeamsInfoService } from 'src/app/core/interfaces/services/teams-info.service';

@Component({
  selector: 'app-tournament-teams',
  templateUrl: './tournament-teams.component.html',
  styleUrls: ['./tournament-teams.component.scss'],
})
export class TournamentTeamsComponent {
  constructor(private teamsService: TeamsInfoService) {}
  teams: any = [];

  ngOnInit(): void {
    this.teams = this.teamsService.teams;
  }
}
