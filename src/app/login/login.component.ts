import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from '../core/interfaces/services/logging.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private loggingService: LoggingService) {}

  visible = false;

  loginFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
  });

  onSubmit() {
    this.loginFormGroup.markAllAsTouched();
    this.router.navigate(['/main/home']);
    this.loggingService.loggedIn.next(true);
  }

  togglePasswordVisibility() {
    console.log(this.visible);
    this.visible = !this.visible;
  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}
