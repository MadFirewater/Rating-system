import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {Student} from "../../core/base-entities";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  link = 'app/student/add';
  pageTitle = 'Students';

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe((students: Student[]) => {
        console.log(students);
        this.students = students;
      });
  }

}
