import { Component, OnDestroy } from '@angular/core';
import { UserInfoService } from 'src/app/core/interfaces/services/user-info.service';
import { takeUntil, Subject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnDestroy {
  constructor(private userInfoService: UserInfoService) {}
  sub$ = new Subject();

  image = '../../../assets/home/team.png';

  previewFiles(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const imageData = reader.result as string;
        this.userInfoService.setImage(imageData);
      });

      // using rxjs takeUntil operator
      // to unsubscribe when the component is
      // destroyed
      reader.readAsDataURL(event.target.files[0]);
      this.userInfoService.image$
        .pipe(takeUntil(this.sub$))
        .subscribe((image) => (this.image = image));
    }
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
