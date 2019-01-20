import {NgModule} from '@angular/core';
import {LoginComponent} from "./pages/login/login.component";
import {SharedModule} from "../../shared/shared.module";
import {UserRoutesModule} from "./user-routes.module";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {MatTabsModule} from "@angular/material";
import {UserRegisterComponent} from "./components/user-register/user-register.component";

@NgModule({
  imports: [
    SharedModule,
    UserRoutesModule,
    MatTabsModule
  ],
  declarations: [
    LoginComponent,
    UserLoginComponent,
    UserRegisterComponent
  ]
})
export class UserModule { }
