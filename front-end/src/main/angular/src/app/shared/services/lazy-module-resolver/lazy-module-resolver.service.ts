import {
  ComponentFactory,
  ComponentFactoryResolver,
  Injectable,
  Injector, NgModuleFactory,
  NgModuleFactoryLoader,
  Type
} from '@angular/core';
import {from, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LazyModuleResolver {
  private readonly resolvers: ((component: Type<any>) => ComponentFactory<any>)[] = [];
  private readonly loadedModules: string[] = [];
  private isNowResolving = false;

  constructor(private moduleLoader: NgModuleFactoryLoader,
              private parentInjector: Injector) { }

  public registerRootResolver(rootResolver: ComponentFactoryResolver) {
    this.registerModuleResolver(rootResolver);
    rootResolver.resolveComponentFactory = this.resolveComponentFactory.bind(this);
  }

  public registerModuleResolver(resolver: ComponentFactoryResolver) {
    this.resolvers.push(resolver.resolveComponentFactory.bind(resolver));
  }

  private resolveComponentFactory<T>(component: Type<T>): ComponentFactory<T> {
    let factory = null;
    if (!this.isNowResolving) {
      this.isNowResolving = true;

      for (const resolver of this.resolvers) {
        try {
          factory = resolver(component);
          if (factory) {
            break;
          }
        } catch {}
      }
      this.isNowResolving = false;
    }
    return factory;
  };

  public loadModule(path: string): Observable<any> {
    const modulePath = environment.rootPath + path;
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
