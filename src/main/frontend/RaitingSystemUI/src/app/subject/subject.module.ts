import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import {SubjectRoutingModule} from "./subject-routing.module";
import {SubjectService} from "./subject.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule,
    SharedModule
  ],
  declarations: [SubjectsComponent, SubjectPageComponent, SubjectAddComponent],
  providers: [SubjectService]
})
export class SubjectModule { }
