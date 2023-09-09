import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
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
