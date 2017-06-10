import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Login} from "../login/login.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {HttpErrorHandlerService} from "./http-error-handler.service";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private httpErrorHandler: HttpErrorHandlerService,
              private localStorageService: LocalStorageService) {
  }

  authLogin(login: Login): Observable<boolean> {
    const query = `username=${login.username}&password=${login.password}&submit=${login.submit}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({headers: headers});
    return this.http.post('/login', query, options)
      .map((response: Response) => {
      this.getUserInfo();


        // if (response.json()) {
        //   console.log(response.json());
        //   // this.authenticate(response.json().data);
        //   // this.isAuthenticated = true;
        // }
        return response.json();
      })
      .catch(this.httpErrorHandler.handleError);
  }

  getUserInfo() {
    this.http.get('/api/userInfo').map((response: Response) => {
      return response.json();
    })
  }
}
