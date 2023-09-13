import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent {
  leaderBoard = [
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },

    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
    {
      position: 1,
      team: 'team name',
      kills: '100',
      killPoints: '100',
      placementPts: '100',
      totalScore: '100',
    },
  ];
  displayedColumns: string[] = [
    'position',
    'team',
    'kills',
    'killPoints',
    'placementPts',
    'totalScore',
  ];
  dataSource = this.leaderBoard;
}
