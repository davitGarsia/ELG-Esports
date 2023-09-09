import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  visible = false;

  registerFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
  });

  onSubmit() {
    console.log(this.registerFormGroup);
  }

  togglePasswordVisibility() {
    console.log(this.visible);
    this.visible = !this.visible;
  }
}
