import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  //Anuncio:string|null = null;
  Anuncio: string|null = null;

  pais  : string|null = null;
  calle: string|null = null;
  ciudad  : string|null = null;
  region: string|null = null;
  codigo: string|null = null;

  constructor() { }

  ngOnInit(): void {
  }


  insertar():void{
    let pais1 = String(this.pais);
    let calle1 = String(this.calle);
    let ciudad1 = String(this.ciudad);
    let region1 = String(this.region);
    let codigo1 = String(this.codigo);

    if(pais1.length == 0 || calle1.length == 0 || ciudad1.length == 0 || region1.length == 0 || codigo1.length == 0){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Campo Vacios";
    }

    if(pais1.search(" ") >= 0 || calle1.search(" ") >= 0 || ciudad1.search(" ") >= 0 || region1.search(" ") >= 0 ){
      console.log("Espacio en blanco encontrado");
      this.Anuncio = "Carácteres vacios encontrados";
    }

    if(pais1.length < 3 || calle1.length <4) {
      console.log("campo muy corto encontrado");
      this.Anuncio = "pais/calle muy corto";
    }
  

    console.log("metodo insertar1");
    console.log(this.pais +" "+this.calle+" "+this.ciudad +" "+ this.region);

  }
  
}
