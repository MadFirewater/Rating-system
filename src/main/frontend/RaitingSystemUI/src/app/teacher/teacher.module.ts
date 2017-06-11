import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TeacherRoutingModule } from "./teacher-routing.module";
import { TeacherContentContainerComponent } from './teacher-content-container/teacher-content-container.component';
import { TeacherPageComponent } from "./teacher-page/teacher-page.component";
import {TeacherService} from "./teacher.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [
    TeacherPageComponent,
    TeacherContentContainerComponent
  ],
  providers: [TeacherService]
})
export class TeacherModule { }
