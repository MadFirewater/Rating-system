import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupPageComponent} from "./group-page/group-page.component";
import {GroupsComponent} from "./groups/groups.component";
import {GroupAddComponent} from "./group-add/group-add.component";
const routes: Routes = [
  {
    path: 'app/group',
    component: GroupPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GroupsComponent
      },
      {
        path: 'add',
        component: GroupAddComponent
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
export class GroupRoutingModule {
}
