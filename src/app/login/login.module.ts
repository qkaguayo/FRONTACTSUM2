import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrotarjetaComponent } from './registrotarjeta/registrotarjeta.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    RegistrotarjetaComponent
  ],
  exports: [
    LoginComponent,
    RegistroComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class LoginModule { }
