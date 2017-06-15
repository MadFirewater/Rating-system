import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorHandlerService} from '../core/http-error-handler.service';
import {Student} from "../core/base-entities";

@Injectable()
export class StudentService {

  constructor(private http: Http,
              private httpHandler: HttpErrorHandlerService) { }

  getStudents(): Observable<Student[]> {

    return this.http.get('/api/students')
      .map((response: Response) => {
        if (response.json()._embedded.students) {
          console.log(response.json());
        }
        return response.json()._embedded.students;
      })
      .catch(this.httpHandler.handleError);
  }

}
