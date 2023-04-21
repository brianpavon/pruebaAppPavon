import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule,FormsModule,ReactiveFormsModule],
})
export class Tab1Page {
  formRegistro:FormGroup;
  
  constructor(private auth : AuthService,private fb : FormBuilder,private route : Router) {
    this.formRegistro = this.fb.group(
      {
        'email':['',[Validators.required,Validators.email]],
        'pass':['',[Validators.required,Validators.minLength(6)]]
      }
    );
  }

  async registerNewUser(){    
    try {      
      await this.auth.register(this.formRegistro.value.email,this.formRegistro.value.pass);
      this.formRegistro.reset();
    } catch (error) {
      console.log(error);
    }    
  }

  async login(){
    try {
      await this.auth.login(this.formRegistro.value.email,this.formRegistro.value.pass);
      this.formRegistro.reset();
    } catch (error) {
      console.log(error);      
    }
  }

  
}
