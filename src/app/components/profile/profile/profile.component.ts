import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private afa: AuthenticationService) { }

  ngOnInit() {
  }

  signOut() {
    this.afa.signOut();
}
}
