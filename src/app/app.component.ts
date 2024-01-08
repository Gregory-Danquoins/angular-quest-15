import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  JSON = JSON;
  isSubmited = false;

  userForm = new FormGroup({
    username: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zipCode: new FormControl(''),
    }),
    credentials: new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    }),
  });

  onSubmit() {
    this.isSubmited = true;
    console.log(this.userForm.value);
  }
}
