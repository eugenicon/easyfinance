import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthenticationService) {
    this.auth.authenticate(undefined, undefined);
  }

  authenticated() {
    return this.auth.authenticated;
  }

  logout() {
    this.auth.logout('/user/login');
  }
}
