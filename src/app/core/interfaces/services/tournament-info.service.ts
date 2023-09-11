import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsInfoService {
  constructor() {}

  timetable = [
    {
      round: 'რაუნდი 1',
      day: 'კვირა',
      time: '21:00pm',
      best: 'N/A',
      pass: 'გადადის ტოპ 13',
    },
    {
      round: 'რაუნდი 2',
      day: 'კვირა',
      time: '21:00pm',
      best: 'N/A',
      pass: 'გადადის ტოპ 13',
    },
    {
      round: 'რაუნდი 3',
      day: 'კვირა',
      time: '21:00pm',
      best: 'N/A',
      pass: 'გადადის ტოპ 13',
    },
  ];

  places = [
    {
      url: '',
      place: '1 ადგილი',
      prize: 'N/A',
    },
    {
      sponsor: 'სპონსორის პრიზი',
      place: '1 ადგილი',
      prize: 'N/A',
    },
  ];
}
