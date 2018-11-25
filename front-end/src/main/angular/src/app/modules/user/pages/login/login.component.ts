import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from "../../../../core/services/authentication.service";
import {User} from "../../user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private route: ActivatedRoute, private auth: AuthenticationService) {
    this.route.queryParams.subscribe(params => {
        let param1 = params['param1'];
        let param2 = params['param2'];

    });

  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user);
  }
}
