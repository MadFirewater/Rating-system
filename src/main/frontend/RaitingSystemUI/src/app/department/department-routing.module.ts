import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartmentsComponent} from "./departments/departments.component";
const routes: Routes = [
  {
    path: 'app/department',
    component: DepartmentRoutingModule,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DepartmentsComponent
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
export class DepartmentRoutingModule {
}
