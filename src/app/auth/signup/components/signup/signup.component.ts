import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
    this.authService.signup(this.user).subscribe(
      r => {
        this.router.navigate(['/auth/signin']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
