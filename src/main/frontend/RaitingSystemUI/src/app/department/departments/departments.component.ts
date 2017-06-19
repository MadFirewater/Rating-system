import {Component, OnInit} from "@angular/core";
import {DepartmentService} from "../department.service";
import {Department} from "../department.model";

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];
  link = 'app/departments/add';
  pageTitle = 'Departments';

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.departmentService.getDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
      });
  }

}
