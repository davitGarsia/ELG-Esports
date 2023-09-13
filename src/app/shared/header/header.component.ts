import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/core/interfaces/services/user-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userInfoService: UserInfoService,
    private router: Router
  ) {}
  // @Input() logo!: string;
  logo = '../../../assets/logos/elg-logo.png';
  image = '';

  ngOnInit(): void {
    this.userInfoService.image$.subscribe((image) => (this.image = image));
  }

  onSelectChange(event: any) {
    const selectedValue = event.target.value;

    if (selectedValue === 'profile') {
      this.router.navigate(['/profile/settings']);
    } else if (selectedValue === 'logout') {
      this.router.navigate(['/']);
    }
  }
}
