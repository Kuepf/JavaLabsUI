import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpRequest, HttpHeaders, HttpParams, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpObserve } from '@angular/common/http/src/client';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AppHttpClient extends HttpClient {

  constructor(httpHandler: HttpHandler) {
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
    if (first instanceof HttpRequest) {
      return super.request(first as any, url, options);
    } else {
      return super.request(first, url, options);
    }
  }
}
