import {Injectable} from "@angular/core";

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  save(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

}
