import {Component, OnInit} from '@angular/core';
import {User} from "../../user.model";
import {AuthenticationService} from "../../../../core/services/authentication.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  user: User = User.EMPTY;
  changePassword: boolean = false;

  constructor(private auth: AuthenticationService) {
    auth.user.subscribe(value => {
      this.user = value
    });
  }

  ngOnInit() {
  }


  save(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.auth.save(this.user).subscribe()
  }

}
