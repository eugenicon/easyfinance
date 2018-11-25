import {NgModule} from '@angular/core';
import {LoginComponent} from "./pages/login/login.component";
import {SharedModule} from "../../shared/shared.module";
import {UserRoutesModule} from "./user-routes.module";

@NgModule({
  imports: [
    SharedModule,
    UserRoutesModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
