

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  Anuncio:string|null = null;


  email: string|null = null;
  password: string|null = "";

  constructor() { 

  }

  ngOnInit(): void {

  }


  insertar():void{
    let email1 = String(this.email);

    if(this.re.test(email1)){
      console.log("mail correcto");
    }else{
      console.log("mail incorrecto");
      this.Anuncio = "Correo incorrecto";
    }

    if(email1.length == 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Campo Vacios";
    }

    if(email1.search(" ") >= 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Carácteres vacios encontrados";
    }


    console.log(this.email, this.password);

  }
}