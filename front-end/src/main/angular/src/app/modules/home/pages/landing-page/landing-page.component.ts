import {Component} from '@angular/core';
import {AuthenticationService} from "../../../../core/services/authentication.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(auth: AuthenticationService) {
    auth.login();
  }
}
