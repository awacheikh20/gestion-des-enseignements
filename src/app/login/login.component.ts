import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData : any = {

  }
  ;
  

  constructor() {}

  ngOnInit() {

  }

  loginUser(){
    console.log(this.loginUserData)
  }

}
