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

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe((students: Student[]) => {
        console.log(students);
        this.students = students;
      });
  }

  onSelect() {
    this.router.navigate(['app/student/add']);
  }

}