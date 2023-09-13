import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  loggedIn = new BehaviorSubject(false);
  loggedIn$ = this.loggedIn.asObservable();
}
