import { Injectable } from '@angular/core';
import { HttpHeaders, HttpHandler, HttpRequest, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpObserve } from '@angular/common/http/src/client';
import { Observable, from, throwError, of } from 'rxjs';
import { catchError, tap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppHttpClient } from '../app-http-client/app-http-client';

@Injectable()
export class AuthHttpClient extends AppHttpClient {

  constructor(
    httpHandler: HttpHandler,
    private router: Router,
  ) {
    super(httpHandler);
  }

  public request(first: string | HttpRequest<any>, url?: string, options: {
    body?: any,
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: HttpObserve,
    params?: HttpParams | { [param: string]: string | string[] },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  } = {}): Observable<any> {
    options = this.addAuthHeader(options);
    if (options) {
      return super.request(first, url, options);
    } else {
      return this.getUnauthorizedResult();
    }
  }

  private addAuthHeader(options: {
    body?: any,
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: HttpObserve,
    params?: HttpParams | { [param: string]: string | string[] },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  } = {}): {
    body?: any,
    headers?: HttpHeaders | { [header: string]: string | string[] },
    observe?: HttpObserve,
    params?: HttpParams | { [param: string]: string | string[] },
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text',
    withCredentials?: boolean,
  } {
    if (options === undefined) {
      options = {};
    }

    if (options.headers === undefined) {
      options.headers = new HttpHeaders();
    }

    if (!(options.headers instanceof HttpHeaders)) {
      options.headers = new HttpHeaders(options.headers);
    }
    options.headers = options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('authToken'));
    return options;
  }

  private getUnauthorizedResult(): Observable<never> {
    return throwError('User is unauthorized!');
  }

  private signOut() {
    localStorage.deleteAll();
    this.router.navigate(['/auth/signin']);
  }
}
