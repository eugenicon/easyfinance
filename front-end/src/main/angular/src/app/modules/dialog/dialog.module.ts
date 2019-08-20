import {ComponentFactoryResolver, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaveBudgetDialogComponent} from "./components/save-budget-dialog/save-budget-dialog.component";
import {CoalescingComponentFactoryResolver} from "../../shared/services/component-factory-resolver/coalescing-component-factory-resolver";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    SaveBudgetDialogComponent
  ],
  entryComponents: [
    SaveBudgetDialogComponent
  ]
})
export class DialogModule {
  constructor(globalResolver: CoalescingComponentFactoryResolver, localResolver: ComponentFactoryResolver) {
    globalResolver.registerResolver(localResolver);
  }
}
