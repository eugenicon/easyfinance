import {Component, Directive, HostListener, InjectionToken, Input} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  template: `<div> The page you are looking for was not found! </div>`,
})
export class NotFoundComponent { }

export const ExternalUrlResolver = new InjectionToken('externalUrlRedirectResolver');

export const ExternalUrlProvider = {provide: ExternalUrlResolver, useValue: (route: ActivatedRouteSnapshot) => {
    let parts = route.paramMap.get('externalUrl').split(':');
    const externalUrl = parts[parts.length - 1];
    const target = parts.length > 1 ? parts[0] : '_self';
    window.open(externalUrl, target);
  },
};

@Directive({
  selector: '[externalUrl]'
})
export class ExternalUrlDirective {
  @Input() externalUrl: string;

  constructor(private router: Router) {}

  @HostListener('click', ['$event'])
  clicked(event: Event) {
    if (!this.externalUrl) {
      return;
    }

    this.router.navigate(['/externalRedirect', { externalUrl: this.externalUrl }], {
      skipLocationChange: true,
    });

    event.preventDefault();
  }
}
