import {Component, OnInit} from '@angular/core';
import {User} from "../../user.model";
import {AuthenticationService} from "../../../../core/services/authentication.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user: User = new User();

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit() {
  }

  register(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.auth.register(this.user)
  }
}
