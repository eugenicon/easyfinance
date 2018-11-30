import {Component} from '@angular/core';
import {AuthenticationService} from '../../../core/services/authentication.service';

@Component({
  selector: 'layout-header',
  templateUrl: './app.header.html',
  styleUrls: ['./app.header.css']
})
export class AppHeader {
  constructor(public auth: AuthenticationService) { }

  logout() {
    this.auth.logout('/user/login');
  }
}
