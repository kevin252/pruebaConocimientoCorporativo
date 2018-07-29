import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, Message } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  disabled = false;
  disabledProfile = false;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private afa: AuthenticationService) {

    }
  items: MenuItem[];

  msgs: Message[] = [];
  activeIndex: number;
  

  ngOnInit() {
    this.afa.loadCurrentUser().subscribe(user => {
      if (user) {
        this.disabled = true;
        this.disabledProfile = true;
      } else {
        this.disabled = false;
        this.disabledProfile = false;
      }
      this.createItems();
    });




  }
  redirigir(ruta: string) {
    this.router.navigate([ruta]);
}
  signOut() {
    this.afa.signOut();
}
  
  createItems() {

    
    this.items = [
      {
          label: 'Inicio',
        icon: 'fa fa-fw fa-file-o',
        disabled: this.disabled,
            command: (event: any) => {
              this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
              this.redirigir('/login');
            }
      },
      {
          label: 'Productos',
          icon: 'fa fa-fw fa-edit',
          command: (event: any) => {
            this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
            this.redirigir('/listProducts');
          }
      },
    
      {
          label: 'Perfil',
        icon: 'fa fa-fw fa-gear',
        visible : this.disabledProfile,
          command: (event: any) => {
            this.msgs.push({ severity: 'info', summary: 'First Step', detail: event.item.label });
            this.redirigir('/profile');
          }
      },
     
  ];
  }
}