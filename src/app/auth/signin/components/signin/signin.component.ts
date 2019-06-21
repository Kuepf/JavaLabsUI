import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from 'src/app/shared/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public username: string;
  public password: string;
  private user: User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public signin() {
    this.user = {
      username: this.username,
      password: this.password
    };
    this.authService.signin(this.user).subscribe(
      r => {
        localStorage.setItem('authToken', r.access_token);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
