import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubjectPageComponent} from "./subject-page/subject-page.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {SubjectAddComponent} from "./subject-add/subject-add.component";
const routes: Routes = [
  {
    path: 'app/subject',
    component: SubjectPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: SubjectsComponent
      },
      {
        path: 'add',
        component: SubjectAddComponent
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
export class SubjectRoutingModule {
}
