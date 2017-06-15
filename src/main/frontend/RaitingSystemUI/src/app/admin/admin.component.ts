import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  menuItems = [
    {
      title: 'Faculties',
      link: '/app/faculty'
    },
    {
      title: 'Departments',
      link: '/app/department'
    },
    {
      title: 'Groups',
      link: '/app/group'
    },
    {
      title: 'Students',
      link: '/app/student'
    },
    {
      title: 'Subjects',
      link: '/app/subject'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
