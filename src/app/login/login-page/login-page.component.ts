import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MedAuthService} from '../../auth/med-auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private authService: MedAuthService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
  }

  register(loginData: any) {
    this.authService.register(loginData).then(() => {
      debugger;
      this.authService.addNewUser(loginData);
      this.router.navigate(['/dashboard'])
    }).catch((e) => console.log(e.message));
  }
}
