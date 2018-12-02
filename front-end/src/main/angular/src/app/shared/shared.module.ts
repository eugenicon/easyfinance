import {NgModule} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule, MatOptionModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
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
import {TableCellTextComponent} from './components/table-cell-text/table-cell-text.component';
import {TableCellLinkComponent} from './components/table-cell-link/table-cell-link.component';
import {TableCellDirective} from './directives/table-cell/table-cell.directive';
import {LayoutModule} from "@angular/cdk/layout";
import { TableCellActionComponent } from './components/table-cell-action/table-cell-action.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import {ChartsModule} from "ng2-charts";

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
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,

    LayoutModule,
    FlexLayoutModule,

    MatIconModule,
    MatProgressSpinnerModule,
    MatMenuModule,

    ChartsModule
  ],
  declarations: [
    ValidationsComponent,
    ShowAuthenticatedDirective,
    AppHeader,
    AppFooter,
    TableComponent,
    TableCellTextComponent,
    TableCellLinkComponent,
    TableCellDirective,
    TableCellActionComponent,
    ConfirmDialogComponent,
    BarChartComponent
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
    ShowAuthenticatedDirective,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    BarChartComponent
  ],
  entryComponents: [
    TableCellTextComponent,
    TableCellLinkComponent,
    TableCellActionComponent,
    ConfirmDialogComponent
  ],

   providers: [ObjToKeysPipe, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}}],
})
export class SharedModule { }
