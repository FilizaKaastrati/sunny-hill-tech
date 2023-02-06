import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {LoginApiService, LoginResponse} from "./login-api.service";
import {AuthService} from "../auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public constructor(private loginService: LoginApiService, private authService: AuthService, private router: Router) {
  }

  public formData: any = null;

  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("")
    });
  }

  onLogin(data: any) {
    this.loginService.login(data.email, data.password).subscribe(result => {
      this.authService.logUserIn(result.token);
      this.router.navigate(['home'])
    })

    console.log(data)
  }
}
