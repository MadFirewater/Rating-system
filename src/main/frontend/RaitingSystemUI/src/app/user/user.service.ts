import {Injectable} from "@angular/core";
import {LocalStorageService} from "../core/local-storage.service";

@Injectable()
export class UserService {

  constructor(private localStorageService: LocalStorageService) {
  }

  getUserName(): string {
    return this.localStorageService.get("username");
  }

}
