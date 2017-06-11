import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {TeacherService} from "../teacher.service";
import {GroupRating} from "../../core/base-entities";

@Component({
  selector: 'app-teacher-content-container',
  templateUrl: './teacher-content-container.component.html',
  styleUrls: ['./teacher-content-container.component.scss']
})
export class TeacherContentContainerComponent implements OnInit, OnChanges {

  @Input() contentType: string;
  entities: any[];
  groupRatings: GroupRating[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.contentType);
    this.parseResponse(this.contentType);
  }

  private parseResponse(contentType: string) {
    switch (contentType) {
      case 'subjects': {
        this.teacherService.getSubjects().subscribe((res: {}[]) => {this.entities = res});
        break;
      }
      case 'groups': {
        this.teacherService.getGroups().subscribe((res: {}[]) => {this.entities = res});
        break;
      }
      case 'students': {
        this.teacherService.getStudents().subscribe((res: {}[]) => {this.entities = res});
        break;
      }
      case 'raiting': {
        this.teacherService.getRating().subscribe((res: GroupRating[]) => {this.groupRatings = res})
      }
    }
  }

}
