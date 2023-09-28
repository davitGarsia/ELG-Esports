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
  totalPages = 1;
  paginationButtons: number[] = [];

  teams!: any[];

  ngOnInit(): void {
    // this.teams = this.teamsService.teams;
    this.totalPages = this.calculateTotalPages();
    this.loadTeamsPage(this.currentPage);
    this.generatePaginationButtons();
  }

  calculateTotalPages(): number {
    return Math.ceil(this.teamsService.getAllTeams().length / this.pageSize);
  }

  loadTeamsPage(pageNumber: number): void {
    this.teams = this.teamsService.getTeamsPage(pageNumber, this.pageSize);
  }

  onPageChange(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.loadTeamsPage(this.currentPage);
      this.generatePaginationButtons();
    }
  }

  generatePaginationButtons(): void {
    const halfButtonsToShow = Math.floor(5 / 2);
    const startPage = Math.max(1, this.currentPage - halfButtonsToShow);
    const endPage = Math.min(startPage + 4, this.totalPages);

    this.paginationButtons = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
}
