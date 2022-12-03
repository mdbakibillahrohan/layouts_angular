import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  hide = true;

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(true),
  });

  login() {
    console.log(this.loginForm.value);
  }


  emailValidation() {
    return this.loginForm.get('email');
  }

  passwordValidation() {
    return this.loginForm.get('password');
  }

}
