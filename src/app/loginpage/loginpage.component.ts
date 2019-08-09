import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
    usercreds = {
      email: '',
      password: ''
};
  constructor(private afauth: AngularFireAuth, private auth: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.auth.login(this.usercreds);
  }
}
