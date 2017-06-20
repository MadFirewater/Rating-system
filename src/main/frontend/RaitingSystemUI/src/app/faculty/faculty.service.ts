import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Faculty} from './faculty.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {HttpErrorHandlerService} from '../core/http-error-handler.service';
import {Router} from '@angular/router';

@Injectable()
export class FacultyService {

  constructor(private http: Http,
              private httpHandler: HttpErrorHandlerService,
              private router: Router) {
  }

  createEntity(body: Faculty): void {

    this.http.post('/api/faculties', body)
      .map((response: Response) => {
        if (response.json()) {
          console.log(response.json());
          this.router.navigate(['/app/faculty']);
        }
      })
      .catch(this.httpHandler.handleError)
      .subscribe();
  }

  getEntities(): Observable<Faculty[]> {

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
