import {FormBuilder, FormGroup} from "@angular/forms";
// import {Faculty} from "../entity.model";
// import {FacultyService} from "../entity.service";
import {OnInit} from "@angular/core";

export class BaseAddComponent implements OnInit {
  active = true;
  form: FormGroup;
  service = null;
  fb: FormBuilder;

  entity;

  constructor(fb: FormBuilder,
              service,
              entity) {
    this.fb = fb;
    this.service = service;
    this.entity = entity;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit() {
    Object.assign(this.entity, this.form.value);
    console.log(this.entity);
    this.service.createEntity(this.entity);
  }

  buildForm(): void {
    this.form = this.fb.group({
      'name': [this.entity.name]
    });
  }
}
