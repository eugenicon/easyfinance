import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {ValidationsComponent} from "./components/validations/validations.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {TableComponent} from "./components/table/table.component";
import {AppHeader} from "./layout/header/app.header";
import {AppFooter} from "./layout/footer/app.footer";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ShowAuthenticatedDirective} from "./directives/show-authenticated/show-authenticated.directive";
import {ObjToKeysPipe} from "./pipes/pipes";
import { TableCellTextComponent } from './components/table-cell-text/table-cell-text.component';
import { TableCellLinkComponent } from './components/table-cell-link/table-cell-link.component';
import { TableCellDirective } from './directives/table-cell/table-cell.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,

    MatToolbarModule,
    MatButtonModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,

  ],
  declarations: [
    ValidationsComponent,
    ShowAuthenticatedDirective,
    AppHeader,
    AppFooter,
    TableComponent,
    TableCellTextComponent,
    TableCellLinkComponent,
    TableCellDirective
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,

    TableComponent,
    ValidationsComponent,

    AppHeader,
    AppFooter,


    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  entryComponents: [
    TableCellTextComponent,
    TableCellLinkComponent,
  ],

   providers: [ObjToKeysPipe],
})
export class SharedModule { }
