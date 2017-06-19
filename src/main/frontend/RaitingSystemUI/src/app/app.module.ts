import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserInfoComponent} from "./user/user-info/user-info.component";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AdminComponent } from './admin/admin.component';
import { FacultyModule} from './faculty/faculty.module';
import { SharedModule} from './shared/shared.module';
import { TeacherModule} from "./teacher/teacher.module";
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {StudentModule} from "./student/student.module";
import { FileUploadModule } from "ng2-file-upload";
import {DepartmentModule} from "./department/department.module";
import {BaseAddComponent} from "./base/base-add.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserInfoComponent,
    BaseAddComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacultyModule,
    SharedModule,
    TeacherModule,
    ChartsModule,
    StudentModule,
    FileUploadModule,
    DepartmentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
