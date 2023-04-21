import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class Tab2Page {
  userLogged : any;
  constructor(private auth : AuthService) {

    this.auth.obtenerUsuarioLogueado().subscribe(async user=>{      
      this.userLogged = user;      
    })

  }

  closeSession(){
    this.auth.logout();
  }

}
