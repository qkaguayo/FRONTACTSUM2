import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrotarjeta',
  templateUrl: './registrotarjeta.component.html',
  styleUrls: ['./registrotarjeta.component.sass']
})
export class RegistrotarjetaComponent implements OnInit {

  Anuncio:string|null = null;
  tipotarjeta:string|null = null;
  nombretarjeta:string|null = null;
  numerotarjeta:string|null = null;
  codigoseguridad:string|null = null;
  mesexpiracion:string|null = null;
  anioexpiracion:string|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  insertar():void{
    let tipotarjeta1 = String(this.tipotarjeta);
    let nombretarjeta1 = String(this.nombretarjeta);
    let numerotarjeta1 = String(this.numerotarjeta);
    let codigoseguridad1 = String(this.codigoseguridad);
    let mesexpiracion1 = String(this.mesexpiracion);
    let anioexpiracion1 = String(this.anioexpiracion);

    if(tipotarjeta1.length == 0 || nombretarjeta1.length == 0 || numerotarjeta1.length == 0 || codigoseguridad1.length == 0 || mesexpiracion1.length == 0 || anioexpiracion1.length == 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Campo Vacios";
    }

    if(tipotarjeta1.search(" ") >= 0 || nombretarjeta1.search(" ") >= 0 || numerotarjeta1.search(" ") >= 0 || codigoseguridad1.search(" ") >= 0 || mesexpiracion1.search(" ") >= 0 || anioexpiracion1.search(" ") >= 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Carácteres vacios encontrados";
    }


  }



}
