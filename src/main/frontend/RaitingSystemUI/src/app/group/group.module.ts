import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { GroupAddComponent } from './group-add/group-add.component';
import {GroupRoutingModule} from "./group-routing.module";
import {GroupService} from "./group.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule
  ],
  declarations: [GroupsComponent, GroupPageComponent, GroupAddComponent],
  providers: [GroupService]
})
export class GroupModule { }
