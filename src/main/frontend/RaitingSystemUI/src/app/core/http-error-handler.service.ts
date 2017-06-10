import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpErrorHandlerService {

  constructor() { }

  public handleError(error: Response | any) {
    if (error instanceof Response) {
      const body = error.json() || '';
      const errorMessage: string = body.data.message;
      console.log(errorMessage);
      return Observable.throw(errorMessage);
    }
  }
}
