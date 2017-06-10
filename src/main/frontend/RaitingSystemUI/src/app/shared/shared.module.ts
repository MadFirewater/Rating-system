import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseListComponent } from './base-list/base-list.component';
import { BaseListItemComponent } from './base-list-item/base-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaseListComponent,
    BaseListItemComponent
  ],
  exports: [
    BaseListComponent,
    BaseListItemComponent
  ]
})
export class SharedModule { }
