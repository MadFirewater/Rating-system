import {Component, OnInit} from '@angular/core';
import {GroupService} from "../group.service";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups: any[];
  link = 'app/group/add';
  pageTitle = 'Groups';

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.groupService.getEntities()
      .subscribe((groups: any[]) => {
        this.groups = groups;
      });
  }

}
