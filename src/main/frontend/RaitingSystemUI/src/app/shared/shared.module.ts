import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BaseListComponent } from './base-list/base-list.component';
import { BaseListItemComponent } from './base-list-item/base-list-item.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    BaseListComponent,
    BaseListItemComponent,
    BarChartComponent
  ],
  exports: [
    BaseListComponent,
    BaseListItemComponent,
    BarChartComponent
  ]
})
export class SharedModule { }
