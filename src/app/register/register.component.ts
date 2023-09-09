import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private router: Router) {}
  visible = false;

  registerFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
  });

  onSubmit() {
    this.registerFormGroup.markAllAsTouched();
  }

  togglePasswordVisibility() {
    console.log(this.visible);
    this.visible = !this.visible;
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
