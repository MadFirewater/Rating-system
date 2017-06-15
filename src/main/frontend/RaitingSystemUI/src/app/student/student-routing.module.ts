import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentPageComponent} from "./student-page/student-page.component";
import {StudentsComponent} from "./students/students.component";
import {StudentAddComponent} from "./student-add/student-add.component";
const routes: Routes = [
  {
    path: 'app/student',
    component: StudentPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: StudentsComponent
      },
      {
        path: 'add',
        component: StudentAddComponent
      }
    ]
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
export class StudentRoutingModule {
}
