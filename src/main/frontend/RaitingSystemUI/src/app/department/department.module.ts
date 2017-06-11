import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentPageComponent } from './department-page/department-page.component';
import { DepartmentsComponent } from './departments/departments.component';
import {DepartmentRoutingModule} from "./department-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule
  ],
  declarations: [DepartmentPageComponent, DepartmentsComponent]
})
export class DepartmentModule { }
