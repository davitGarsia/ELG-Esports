import { Component, OnInit } from '@angular/core';
import { TeamsInfoService } from 'src/app/core/interfaces/services/teams-info.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  constructor(private teamsService: TeamsInfoService) {}
  //teams: any = [];
  math = Math;

  currentPage: number = 1;
  pageSize: number = 10;
  totalItems!: number;

  teams!: any[];

  ngOnInit(): void {
    // this.teams = this.teamsService.teams;
    this.loadData();
  }

  loadData() {
    this.totalItems = this.teamsService.getData().length;
    this.teams = this.teamsService.getTeams(this.currentPage, this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadData();
  }

  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
}
