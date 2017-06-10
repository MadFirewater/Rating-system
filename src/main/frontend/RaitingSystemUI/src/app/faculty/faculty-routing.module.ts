import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FacultyPageComponent} from './faculty-page/faculty-page.component';
import {FacultiesComponent} from './faculties/faculties.component';
const routes: Routes = [
  {
    path: 'app/faculty',
    component: FacultyPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: FacultiesComponent
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
