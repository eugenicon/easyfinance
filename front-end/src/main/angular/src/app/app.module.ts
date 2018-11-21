import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";
import {LoginComponent} from "./components/login/login.component";
import {ObjToKeysPipe} from "./components/pipes";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ValidationsComponent} from './components/validations/validations.component';
import {XhrInterceptor} from "./services/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    ObjToKeysPipe,
    ValidationsComponent
  ],
  providers: [ObjToKeysPipe, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
