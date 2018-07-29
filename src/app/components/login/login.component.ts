import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User;
  constructor(
		private afa: AuthenticationService,private toastr:ToastrService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.afa.login(this.user.username, this.user.password,this.toastr);
  
    } else {
      this.toastr.error("Por favor ingrese todos los datos");
    }
}

}
