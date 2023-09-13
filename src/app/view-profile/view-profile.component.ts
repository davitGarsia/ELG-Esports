import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../core/interfaces/services/user-info.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
})
export class ViewProfileComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}

  image: any;

  ngOnInit(): void {
    this.userInfoService.image$.subscribe((image) => {
      this.image = image;
    });
  }
}
