import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherContentContainerComponent } from './teacher-content-container/teacher-content-container.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import {TeacherService} from './teacher.service';
import {SharedModule} from '../shared/shared.module';
import {LearnProcessRatingItemComponent} from './learn-process-rating-item/learn-process-rating-item.component';
import { LearnProcessListComponent } from './learn-process-list/learn-process-list.component';
import { LearnProcessListItemComponent } from './learn-process-list-item/learn-process-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule,
    ChartsModule
  ],
  declarations: [
    TeacherPageComponent,
    TeacherContentContainerComponent,
    LearnProcessRatingItemComponent,
    LearnProcessListComponent,
    LearnProcessListItemComponent
  ],
  providers: [TeacherService]
})
export class TeacherModule { }
