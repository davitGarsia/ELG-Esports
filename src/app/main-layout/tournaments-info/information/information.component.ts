import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { TournamentInfoService } from 'src/app/core/interfaces/services/tournament-info.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentInfoService
  ) {}

  timetable: any = [];
  dataSource: any = [];
  dataSource1: any = [];

  places: any = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params) {
        this.timetable = this.tournamentService.timetable[+params['id'] - 1];
        this.dataSource = this.timetable;

        this.places = this.tournamentService.places[+params['id'] - 1];
        this.dataSource1 = this.places;
      }
    });
  }

  displayedColumns: string[] = ['round', 'day', 'time', 'best', 'pass'];
  displayedColumns1: string[] = ['url', 'place', 'prize'];
}
