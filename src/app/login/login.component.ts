import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  visible = false;

  loginFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
  });

  onSubmit() {
    this.loginFormGroup.markAllAsTouched();
  }

  togglePasswordVisibility() {
    console.log(this.visible);
    this.visible = !this.visible;
  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}
