import {Component, OnInit} from '@angular/core';
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subjects: any[];
  link = 'app/subject/add';
  pageTitle = 'Subjects';

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.subjectService.getEntities()
      .subscribe((subjects: any[]) => {
        this.subjects = subjects;
      });
  }

}
