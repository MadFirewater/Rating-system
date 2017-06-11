import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-teacher-content-container',
  templateUrl: './teacher-content-container.component.html',
  styleUrls: ['./teacher-content-container.component.scss']
})
export class TeacherContentContainerComponent implements OnInit {

  @Input() contentType: string;

  constructor() { }

  ngOnInit() {
  }

}
