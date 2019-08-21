import {ComponentFactory, ComponentFactoryResolver, Injectable, Type} from '@angular/core';

@Injectable()
export class CoalescingComponentFactoryResolver extends ComponentFactoryResolver {
  private readonly resolvers: ((component: Type<any>) => ComponentFactory<any>)[] = [];
  private isResolving = false;

  public registerRootResolver(rootResolver: ComponentFactoryResolver) {
    this.registerModuleResolver(rootResolver);
    rootResolver.resolveComponentFactory = this.resolveComponentFactory;
  }

  public registerModuleResolver(resolver: ComponentFactoryResolver) {
    this.resolvers.push(resolver.resolveComponentFactory.bind(resolver));
  }

  public resolveComponentFactory = <T>(component: Type<T>): ComponentFactory<T> => {
    // Prevents cyclic calls.
    if (this.isResolving) {
      return null;
    }

    this.isResolving = true;
    try {
      return this.resolveInternal(component);
    } finally {
      this.isResolving = false;
    }
  };

  private resolveInternal<T>(component: Type<T>): ComponentFactory<T> {
    for (const resolver of this.resolvers) {
      try {
        const factory = resolver(component);
        if (factory) {
          return factory;
        }
      } catch {}
    }

    return null;
  };
}
