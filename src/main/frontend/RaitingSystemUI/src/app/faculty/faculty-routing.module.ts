import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacultyPageComponent} from './faculty-page/faculty-page.component';
import {FacultiesComponent} from './faculties/faculties.component';
import {FacultyAddComponent} from './faculty-add/faculty-add.component';
const routes: Routes = [
  {
    path: 'app/faculty',
    component: FacultyPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FacultiesComponent
      },
      {
        path: 'add',
        component: FacultyAddComponent
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
export class FacultyRoutingModule {
}
