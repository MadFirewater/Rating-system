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
      link: '/faculty'
    },
    {
      title: 'Departments',
      link: '/department'
    },
    {
      title: 'Groups',
      link: '/group'
    },
    {
      title: 'Subjects',
      link: '/subject'
    },
    {
      title: 'Learn processes',
      link: '/learnprocess'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
