import { Component } from '@angular/core';
import { Games } from '../core/interfaces/games.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  games: Games[] = [
    { url: '../../assets/games/apex.png', title: 'game-1' },
    { url: '../../assets/games/apex-1.png', title: 'game-2' },
    { url: '../../assets/games/apex-2.png', title: 'game-3' },
    { url: '../../assets/games/apex-3.png', title: 'game-4' },
    { url: '../../assets/games/apex-4.png', title: 'game-5' },
    { url: '../../assets/games/apex-5.png', title: 'game-6' },
    { url: '../../assets/games/apex-6.png', title: 'game-7' },
  ];
}
