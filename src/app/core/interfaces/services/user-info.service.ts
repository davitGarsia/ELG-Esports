import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private imageSubject = new BehaviorSubject<string>(''); // Initialize with an empty string
  public image$ = this.imageSubject.asObservable();

  setImage(imageData: string): void {
    this.imageSubject.next(imageData);
  }

  private teamImageSubject = new BehaviorSubject<string>(''); // Initialize with an empty string
  public teamImage$ = this.teamImageSubject.asObservable();

  setTeamImage(imageData: string): void {
    this.teamImageSubject.next(imageData);
  }

  private teamName = new BehaviorSubject<any>('');
  public teamName$ = this.teamName.asObservable();

  setTeamName(data: any) {
    this.teamName.next(data);
  }
}
