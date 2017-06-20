import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { DepartmentsComponent } from './departments/departments.component';
import {DepartmentRoutingModule} from "./department-routing.module";
import {SharedModule} from "../shared/shared.module";
import {DepartmentService} from "./department.service";
import {DepartmentAddComponent} from "./department-add/department-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    DepartmentRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DepartmentPageComponent, DepartmentsComponent, DepartmentAddComponent],
  providers:[DepartmentService]
})
export class DepartmentModule { }
