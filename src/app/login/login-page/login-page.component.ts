import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MedAuthService} from '../../auth/med-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private readonly authService: MedAuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  login(loginData: any) {
    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => console.log(e.message));
  }
}
