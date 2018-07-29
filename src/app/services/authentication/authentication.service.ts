import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afa: AngularFireAuth, public afs: AngularFirestore,private route: ActivatedRoute,
    private router: Router) { }

  loadCurrentUser() {
		return this.afa.authState;
  }

  signOut() {
    this.afa.auth.signOut();
    this.router.navigate(['/login']);
	}

  login(userEmail: string, password: string,toastr:ToastrService) {
		this.afa.auth.signInWithEmailAndPassword(userEmail, password).then((infoUser) => {
      this.router.navigate(['/listProducts']);
    })
      .catch((error) => {
        toastr.error("El Email o Password no pertenecen a un usuario registrado");
      
    });
	}
}
