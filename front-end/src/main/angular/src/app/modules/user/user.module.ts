import {NgModule} from '@angular/core';
import {LoginComponent} from "./pages/login/login.component";
import {SharedModule} from "../../shared/shared.module";
import {UserRoutesModule} from "./user-routes.module";
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {MatExpansionModule, MatListModule, MatSidenavModule, MatTabsModule} from "@angular/material";
import {UserRegisterComponent} from "./components/user-register/user-register.component";
import {UserSettingsComponent} from "./components/user-settings/user-settings.component";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";
import {UserGroupComponent} from "./components/user-group/user-group.component";
import {SaveUserGroupDialogComponent} from "./components/save-user-group-dialog/save-user-group-dialog.component";

@NgModule({
  imports: [
    SharedModule,
    UserRoutesModule,
    MatTabsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatListModule
  ],
  declarations: [
    LoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserSettingsComponent,
    SettingsPageComponent,
    UserGroupComponent,
    SaveUserGroupDialogComponent
  ],
  entryComponents: [
    SaveUserGroupDialogComponent
  ]
})
export class UserModule { }
