import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Login} from '../login/login.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorHandlerService} from './http-error-handler.service';

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private httpErrorHandler: HttpErrorHandlerService) { }

  authLogin(login: Login): Observable<boolean> {
    const query = `username=${login.username}&password=${login.password}&submit=${login.submit}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:8080/login', query, options)
      .map((response: Response) => {
        if (response.json()) {
          console.log(response.json());
          // this.authenticate(response.json().data);
          // this.isAuthenticated = true;
        }
        return response.json();
      })
      .catch(this.httpErrorHandler.handleError);
  }
}
