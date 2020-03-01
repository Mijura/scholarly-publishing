import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from './login.viewmodel';
import { FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  vm: LoginViewModel;

  constructor(formBuiler: FormBuilder, private loginService: LoginService) { 
    this.vm = new LoginViewModel(formBuiler);
  }

  get loginForm(){
    return this.vm.loginForm;
  }

  login(){
    this.loginService.login(this.loginForm.value).subscribe(data => alert(JSON.stringify(this.jwtDecode(data.jwt))));
  }

  jwtDecode(t) {
    let token = {
      header: JSON.parse(window.atob(t.split('.')[0])),
      payload: JSON.parse(window.atob(t.split('.')[1]))
    };
    
    return (token)
  }

}
