import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";
import {AuthService} from "../../core/auth.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [UserService, AuthService]
})
export class UserInfoComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService) {
  }

  username = "";

  ngOnInit() {
    this.username = this.getUsername();
  }

  getUsername(): string {
    return this.userService.getUserName();
  }

  logout() {
    this.authService.logout();
  }

}
