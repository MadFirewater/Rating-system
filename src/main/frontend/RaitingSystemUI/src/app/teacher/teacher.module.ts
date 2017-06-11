import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherRoutingModule} from "./teacher-routing.module";
import { TeacherContentContainerComponent } from './teacher-content-container/teacher-content-container.component';
import {TeacherPageComponent} from "./teacher-page/teacher-page.component";

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherPageComponent,
    TeacherContentContainerComponent
  ]
})
export class TeacherModule { }
