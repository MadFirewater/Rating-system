import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Login} from './login.model';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  active = true;
  loginForm: FormGroup;

  login = new Login({
    username: 'admin',
    password: 'admin',
    submit: 'Login'
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    Object.assign(this.login, this.loginForm.value);
    console.log(this.login);
    this.authService.authLogin(this.login)
      .subscribe((response: boolean) => {

      }, (error => {

      }));
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      'username': [this.login.username],
      'password': [this.login.password]
    });
  }
}
