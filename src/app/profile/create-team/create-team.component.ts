import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserInfoService } from 'src/app/core/interfaces/services/user-info.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss'],
})
export class CreateTeamComponent {
  constructor(private userInfoService: UserInfoService) {}
  image = '../../../assets/home/team.png';

  previewFiles(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const imageData = reader.result as string;
        this.userInfoService.setTeamImage(imageData);
      });

      reader.readAsDataURL(event.target.files[0]);
      this.userInfoService.teamImage$.subscribe(
        (image) => (this.image = image)
      );
    }
  }

  userForm = new FormGroup({
    name: new FormControl(''),
    shortName: new FormControl(''),
  });

  ngSubmit() {
    this.userForm.valueChanges.subscribe((value) => {
      this.userInfoService.setTeamName(value);
    });
  }
}
