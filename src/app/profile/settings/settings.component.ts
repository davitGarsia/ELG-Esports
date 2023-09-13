import { Component } from '@angular/core';
import { UserInfoService } from 'src/app/core/interfaces/services/user-info.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private userInfoService: UserInfoService) {}

  image = '../../../assets/home/team.png';

  previewFiles(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const imageData = reader.result as string;
        this.userInfoService.setImage(imageData);
      });

      reader.readAsDataURL(event.target.files[0]);
      this.userInfoService.image$.subscribe((image) => (this.image = image));
    }
  }

  // previewFiles(event: any) {
  //   const reader: any = new FileReader();

  //   reader.addEventListener('load', () => {
  //     const imageData = reader.result as string;
  //     this.userInfoService.setImage(imageData);
  //   });

  //   if (event.target.files && event.target.files.length > 0) {
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  //   console.log(reader.readAsDataURL(event.target.files[0]));
  // }
}
