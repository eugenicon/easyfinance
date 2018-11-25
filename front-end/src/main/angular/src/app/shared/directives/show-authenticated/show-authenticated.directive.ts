import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "../../../core/services/authentication.service";

@Directive({
  selector: '[showIfAuth]'
})
export class ShowAuthenticatedDirective implements OnInit  {
  @Input() showIfAuth: boolean;

  constructor(private template: TemplateRef<any>, private container: ViewContainerRef, private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.isAuthenticated.subscribe(authenticated => {
      this.container.clear();
      if (authenticated && this.showIfAuth || !authenticated && !this.showIfAuth) {
        this.container.createEmbeddedView(this.template);
      }
    })
  }
}
