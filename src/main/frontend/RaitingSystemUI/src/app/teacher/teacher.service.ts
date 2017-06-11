import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorHandlerService} from '../core/http-error-handler.service';

@Injectable()
export class TeacherService {

  constructor(private http: Http,
              private httpHandler: HttpErrorHandlerService) { }

  getSubjects(): Observable<{}[]> {

    return this.http.get(`/api/subjects`)
      .map((response: Response) => {
        if (response.json()._embedded.subjects) {
          console.log(response.json());
        }
        return response.json()._embedded.subjects;
      })
      .catch(this.httpHandler.handleError);
  }

  getGroups(): Observable<{}[]> {

    return this.http.get('/api/groups')
      .map((response: Response) => {
        return response.json()._embedded.groups;
      })
      .catch(this.httpHandler.handleError);
  }

  getStudents(): Observable<{}[]> {

    return this.http.get('/api/students')
      .map((response: Response) => {
        return response.json()._embedded.students;
      })
      .catch(this.httpHandler.handleError);
  }

}