import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.scss']
})
export class TeacherPageComponent implements OnInit {

  selectedMenuItem = 'subjects';

  constructor() { }

  ngOnInit() {
  }

  selectMenuItem(selectedItem: string) {
    this.selectedMenuItem = selectedItem;
  }

}
