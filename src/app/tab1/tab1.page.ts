import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule],
})
export class Tab1Page {
  nombre !: string ;
  apellido !: string ;
  public mostrar : boolean = false;
  direccion !: string ;
  

  constructor(private auth : AuthService) {
    
  }

  async registerNewUser(email:any,pass:any){
    try {
      const user = await this.auth.register(email,pass);
      console.log(user);
      
    } catch (error) {
      console.log(error);
    }
    
  }

  MostrarDatos(nombre:any, apellido:any){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mostrar = true;
  }
}
