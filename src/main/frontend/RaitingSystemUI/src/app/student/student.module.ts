import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from "./student-routing.module";
import {StudentPageComponent} from "./student-page/student-page.component";
import {StudentsComponent} from "./students/students.component";
import {StudentService} from "./student.service";
import {SharedModule} from "../shared/shared.module";
import { StudentAddComponent } from './student-add/student-add.component';
import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    FileUploadModule
  ],
  declarations: [
    StudentPageComponent,
    StudentsComponent,
    StudentAddComponent
  ],
  providers: [StudentService]
})
export class StudentModule { }
