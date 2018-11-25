import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShowAuthenticatedDirective} from "./shared/directives/show-authenticated/show-authenticated.directive";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {XhrInterceptor} from "./core/interceptors/xhr.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [ShowAuthenticatedDirective, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  imports: [
    BrowserAnimationsModule,

    SharedModule,

    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
