import {Injectable, Injector, NgModuleFactory, NgModuleFactoryLoader} from '@angular/core';
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {
  private loadedModules: string[] = [];

  constructor(private moduleLoader: NgModuleFactoryLoader,
              private parentInjector: Injector) { }

  public loadModule(path: string): Observable<any> {
    const modulePath = 'src/app/' + path;
    return from(this.moduleLoader
      .load(modulePath)
      .then((module: NgModuleFactory<any>) => {
        if (this.loadedModules.indexOf(modulePath) === -1) {
          module.create(this.parentInjector);
          this.loadedModules.push(modulePath);
        }
      }));
  }
}
