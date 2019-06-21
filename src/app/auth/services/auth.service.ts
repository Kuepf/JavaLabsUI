import { Injectable } from '@angular/core';
import { AppHttpClient } from 'src/app/core/app-http-client/app-http-client';
import { User } from 'src/app/shared/models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: AppHttpClient) { }

  public signin(user: User): Observable<any> {
    return this.http.post(environment.registrationAPI + '/login', user);
  }

  public signup(user: User): Observable<any> {
    return this.http.post(environment.registrationAPI + '/registration', user);
  }
}
