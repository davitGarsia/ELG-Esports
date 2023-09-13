import { Component, Input, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/core/interfaces/services/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}
  // @Input() logo!: string;
  logo = '../../../assets/logos/elg-logo.png';
  image = '';

  ngOnInit(): void {
    this.userInfoService.image$.subscribe((image) => (this.image = image));
  }
}
