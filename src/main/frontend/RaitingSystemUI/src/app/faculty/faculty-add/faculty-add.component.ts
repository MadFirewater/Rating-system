import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Faculty} from '../faculty.model';
import {FacultyService} from "../faculty.service";

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.scss']
})
export class FacultyAddComponent implements OnInit {
  active = true;
  facultyForm: FormGroup;

  faculty = new Faculty({
    name: ''
  });

  constructor(private fb: FormBuilder,
              private facultyService: FacultyService) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    Object.assign(this.faculty, this.facultyForm.value);
    console.log(this.faculty);
    this.facultyService.createFaculty(this.faculty);
  }

  buildForm(): void {
    this.facultyForm = this.fb.group({
      'name': [this.faculty.name]
    });
  }
}
