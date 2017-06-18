import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyPageComponent } from './faculty-page/faculty-page.component';
import { FacultiesComponent } from './faculties/faculties.component';
import {FacultyRoutingModule} from './faculty-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FacultyService} from './faculty.service';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FacultyRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FacultyPageComponent, FacultiesComponent, FacultyAddComponent],
  providers: [
    FacultyService
  ]
})
export class FacultyModule { }
