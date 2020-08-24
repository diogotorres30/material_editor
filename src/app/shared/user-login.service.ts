import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3)])
  });
  constructor() { }

  initializeFormGroup() {
    this.form.setValue({
      email: '',
      password: ''
    });
  }
}
