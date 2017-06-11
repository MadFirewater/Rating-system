import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyPageComponent } from './faculty-page/faculty-page.component';
import { FacultiesComponent } from './faculties/faculties.component';
import {FacultyRoutingModule} from './faculty-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FacultyService} from './faculty.service';

@NgModule({
  imports: [
    FacultyRoutingModule,
    CommonModule,
    SharedModule
  ],
  declarations: [FacultyPageComponent, FacultiesComponent],
  providers: [
    FacultyService
  ]
})
export class FacultyModule { }
