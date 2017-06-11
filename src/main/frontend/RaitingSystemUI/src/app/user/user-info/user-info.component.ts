import {Component, OnInit} from "@angular/core";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  providers: [UserService]
})
export class UserInfoComponent implements OnInit {

  constructor(private userService: UserService) {
  }
  username="";
  ngOnInit() {
    this.username=this.getUsername();
  }

  getUsername(): string {
    return this.userService.getUserName();
  }

}
