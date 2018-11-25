import {NgModule} from '@angular/core';
import {OperationsComponent} from "./pages/operations/operations.component";
import {SharedModule} from "../../shared/shared.module";
import {OperationsRoutesModule} from "./operations.route";

@NgModule({
  imports: [
    SharedModule,
    OperationsRoutesModule
  ],
  declarations: [
    OperationsComponent
  ]
})
export class OperationsModule { }
