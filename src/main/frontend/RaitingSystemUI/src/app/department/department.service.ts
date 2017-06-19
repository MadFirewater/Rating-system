import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {HttpErrorHandlerService} from "../core/http-error-handler.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Department} from "./department.model";

@Injectable()
export class DepartmentService {

  constructor(private http: Http,
              private httpHandler: HttpErrorHandlerService,
              private router: Router) {
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get('/api/departments')
      .map((response: Response) => {
        if (response.json()._embedded.departments) {
          console.log(response.json());
        }
        return response.json()._embedded.departments;
      })
      .catch(this.httpHandler.handleError);
  }

}
