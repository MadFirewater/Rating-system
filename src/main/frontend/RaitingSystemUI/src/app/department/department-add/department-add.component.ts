import {Component, OnInit} from "@angular/core";
import {BaseAddComponent} from "../../base/base-add.component";
import {FormBuilder} from "@angular/forms";
import {Department} from "../department.model";
import {DepartmentService} from "../department.service";

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent extends BaseAddComponent implements OnInit {

  constructor(fb: FormBuilder, departmentService: DepartmentService) {
    super(fb, departmentService, new Department({name: ''}));
  }
}
