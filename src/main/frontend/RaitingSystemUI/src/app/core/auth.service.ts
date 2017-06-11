import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Login} from "../login/login.model";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {HttpErrorHandlerService} from "./http-error-handler.service";
import {LocalStorageService} from "./local-storage.service";
import {UserInfo} from "./base-entities";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private http: Http,
              private httpErrorHandler: HttpErrorHandlerService,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  authLogin(login: Login): Observable<boolean> {
    const query = `username=${login.username}&password=${login.password}&submit=${login.submit}`;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({headers: headers});
    return this.http.post('/login', query, options)
      .map((response: Response) => {
        this.getUserInfo().subscribe((resp: UserInfo) => {
          console.log("!!!!");
          this.localStorageService.save("username", resp.username);
          this.localStorageService.save("role", resp.role);
          this.resolveRedirect(resp.role);
        }, (error => {

        }));
        if (response.json()) {
          console.log(response.json());
          // this.authenticate(response.json().data);
          // this.isAuthenticated = true;
        }
        return response.json();
      })
      .catch(this.httpErrorHandler.handleError);
  }

  logout() {
    this.http.get('/logout').subscribe();
    this.router.navigate(['/']);
  }

  getUserInfo(): Observable<UserInfo> {
    return this.http.get('/api/userInfo').map((response: Response) => {
      return response.json();
    })
  }

  resolveRedirect(role: string) {
    switch (role) {
      case 'ADMIN': {
        this.router.navigate(['app/admin']);
        break;
      }
      case 'TEACHER': {
        this.router.navigate(['app/teacher']);
        break;
      }

      case 'STUDENT': {
        this.router.navigate(['app/student']);
        break;
      }
    }
  }
}
