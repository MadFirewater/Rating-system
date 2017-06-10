import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Faculty} from './faculty.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorHandlerService} from '../core/http-error-handler.service';

@Injectable()
export class FacultyService {

  constructor(private http: Http,
              private httpHandler: HttpErrorHandlerService) {
  }

  getFaculties(): Observable<Faculty[]> {

    return this.http.get('/api/faculties')
      .map((response: Response) => {
        if (response.json()._embedded.faculties) {
          console.log(response.json());
        }
        return response.json()._embedded.faculties;
      })
      .catch(this.httpHandler.handleError);
  }

}
