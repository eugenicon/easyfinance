import {Component, OnInit} from '@angular/core';
import {User} from "../../user.model";
import {AuthenticationService} from "../../../../core/services/authentication.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User = new User();
  badCredentials = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() { }

  login(form: NgForm) {
    this.badCredentials = false;
    if (!form.valid) {
      return;
    }

    this.auth.login(this.user).subscribe(isAuthenticated => {
      this.badCredentials = !isAuthenticated;
    });
  }
}
