import { Component } from '@angular/core';
import { TeamsInfoService } from 'src/app/core/interfaces/services/teams-info.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  constructor(private teamsService: TeamsInfoService) {}
  teams: any = [];

  ngOnInit(): void {
    this.teams = this.teamsService.teams;
  }
}
