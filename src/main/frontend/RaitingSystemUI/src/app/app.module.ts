import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {AdminComponent} from "./admin/admin.component";
import {FacultyModule} from "./faculty/faculty.module";
import {SharedModule} from "./shared/shared.module";
import {UserInfoComponent} from "./user/user-info/user-info.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserInfoComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
