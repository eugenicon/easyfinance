import {ComponentFactoryResolver, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {XhrInterceptor} from "./core/interceptors/xhr.interceptor";
import {LazyModuleResolver} from "./shared/services/lazy-module-resolver/lazy-module-resolver.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },
    LazyModuleResolver
  ],
  imports: [
    BrowserAnimationsModule,

    SharedModule,

    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(lazyModuleResolver: LazyModuleResolver, localResolver: ComponentFactoryResolver) {
    lazyModuleResolver.registerRootResolver(localResolver);
  }
}
