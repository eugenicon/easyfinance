import {ComponentFactoryResolver, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SaveBudgetDialogComponent} from "./components/save-budget-dialog/save-budget-dialog.component";
import {LazyModuleResolver} from "../../shared/services/lazy-module-resolver/lazy-module-resolver.service";
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
  constructor(lazyModuleResolver: LazyModuleResolver, localResolver: ComponentFactoryResolver) {
    lazyModuleResolver.registerModuleResolver(localResolver);
  }
}
