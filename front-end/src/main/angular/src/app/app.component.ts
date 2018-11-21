import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthenticationService) { }

  authenticated() {
    return this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout('/user/login');
  }
}
