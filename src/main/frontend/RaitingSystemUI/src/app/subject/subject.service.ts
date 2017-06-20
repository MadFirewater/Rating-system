import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorHandlerService} from "../core/http-error-handler.service";

@Injectable()
export class SubjectService {

  constructor(private http: Http,
              private httpHandler: HttpErrorHandlerService) { }

  getEntities(): Observable<{}[]> {

    return this.http.get('/api/subjects')
      .map((response: Response) => {
        if (response.json()._embedded.subjects) {
          console.log(response.json());
        }
        return response.json()._embedded.subjects;
      })
      .catch(this.httpHandler.handleError);
  }

}
