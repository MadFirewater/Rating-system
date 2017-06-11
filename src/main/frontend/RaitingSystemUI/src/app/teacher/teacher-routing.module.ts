import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherPageComponent} from "./teacher-page/teacher-page.component";
const routes: Routes = [
  {
    path: 'app/teacher',
    component: TeacherPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule {
}
