import { Injectable } from '@angular/core';
import { AuthHttpClient } from 'src/app/core/auth-http-client/auth-http-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeaponService {

  private _weapon: any;
  public get weapon(): any {
    return this._weapon;
  }
  public set weapon(v: any) {
    this._weapon = v;
  }


  constructor(private http: AuthHttpClient) { }

  public getWeapons(): Observable<any> {
    return this.http.get(environment.regularAPI + '/weapons');
  }

  public addWeapon(weapon: any): Observable<any> {
    return this.http.post(environment.regularAPI + '/weapons', weapon);
  }

  public updateWeapon(weapon: any): Observable<any> {
    return this.http.put(environment.regularAPI + '/weapons', weapon);
  }

  public deleteWeapon(id: number): Observable<any> {
    return this.http.delete(environment.regularAPI + `/weapons/${id}`);
  }
}
