import {NgModule} from '@angular/core';
import {LoginComponent} from "./pages/login/login.component";
import {SharedModule} from "../../shared/shared.module";
import {UserRoutesModule} from "./user-routes.module";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {MatExpansionModule, MatTabsModule} from "@angular/material";
import {UserRegisterComponent} from "./components/user-register/user-register.component";
import {UserSettingsComponent} from "./components/user-settings/user-settings.component";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";

@NgModule({
  imports: [
    SharedModule,
    UserRoutesModule,
    MatTabsModule,
    MatExpansionModule
  ],
  declarations: [
    LoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserSettingsComponent,
    SettingsPageComponent
  ]
})
export class UserModule { }
