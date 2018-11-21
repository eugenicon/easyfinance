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
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {LayoutModule} from "@angular/cdk/layout";
import {LoginComponent} from "./components/login/login.component";
import {ObjToKeysPipe} from "./components/pipes";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ValidationsComponent} from './components/validations/validations.component';
import {XhrInterceptor} from "./services/authentication.service";
import {CategoriesComponent} from './components/categories/categories.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    ObjToKeysPipe,
    ValidationsComponent,
    CategoriesComponent,
    TableComponent
  ],
  providers: [ObjToKeysPipe, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
