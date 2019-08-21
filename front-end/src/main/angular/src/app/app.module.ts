import {ComponentFactoryResolver, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {XhrInterceptor} from "./core/interceptors/xhr.interceptor";
import {CoalescingComponentFactoryResolver} from "./shared/services/component-factory-resolver/coalescing-component-factory-resolver";
import {ModuleLoaderService} from "./shared/services/module-loader/module-loader.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    CoalescingComponentFactoryResolver,
    ModuleLoaderService
  ],
  imports: [
    BrowserAnimationsModule,

    SharedModule,

    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(coalescingResolver: CoalescingComponentFactoryResolver, localResolver: ComponentFactoryResolver) {
    coalescingResolver.registerRootResolver(localResolver);
  }
}
