import {Component, OnInit} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import {Faculty} from "../faculty.model";
import {FacultyService} from "../faculty.service";
import {BaseAddComponent} from "../../base/base-add.component";

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.scss']
})
export class FacultyAddComponent extends BaseAddComponent implements OnInit {

  constructor(fb: FormBuilder, facultyService: FacultyService) {
    super(fb, facultyService, new Faculty({name: ''}));
  }
}
