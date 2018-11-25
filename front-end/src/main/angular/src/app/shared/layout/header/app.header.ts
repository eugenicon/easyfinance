import {Component} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';

@Component({
  selector: 'layout-header',
  templateUrl: './app.header.html'
})
export class AppHeader {
  constructor(private auth: AuthenticationService) { }

  logout() {
    this.auth.logout('/user/login');
  }
}
