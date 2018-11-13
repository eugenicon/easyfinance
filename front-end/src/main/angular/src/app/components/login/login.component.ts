import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        debugger
        let param1 = params['param1'];
        let param2 = params['param2'];
    });

  }

  ngOnInit() {
    debugger
  }

  login(){
    console.log(this.user)
  }
}
