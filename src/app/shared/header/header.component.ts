import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // @Input() logo!: string;
  logo = '../../../assets/logos/elg-logo.png';
}
