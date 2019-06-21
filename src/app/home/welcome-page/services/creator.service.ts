import { Injectable } from '@angular/core';
import { AuthHttpClient } from 'src/app/core/auth-http-client/auth-http-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Creator } from 'src/app/shared/models/Creator';

@Injectable()
export class CreatorService {


  private _creator: Creator;
  public get creator(): Creator {
    return this._creator;
  }
  public set creator(v: Creator) {
    this._creator = v;
  }


  constructor(private http: AuthHttpClient) { }

  public getCreators(): Observable<any> {
    return this.http.get(environment.regularAPI + '/creators');
  }

  public addCreator(creator: Creator): Observable<any> {
    return this.http.post(environment.regularAPI + '/creators', creator);
  }

  public updateCreator(creator: Creator): Observable<any> {
    return this.http.put(environment.regularAPI + '/creators', creator);
  }

  public deleteCreator(id: number): Observable<any> {
    return this.http.delete(environment.regularAPI + `/creators/${id}`);
  }

}
