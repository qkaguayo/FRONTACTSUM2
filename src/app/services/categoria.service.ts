import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria.interface'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //declaracion de variableS
  categoria: Categoria = {};
  
  constructor(private http: HttpClient) { 
    console.log("Constructor CategoriaService")
    this.cargarCategorias();
    this.cargarCategorias_old();
  }

  //estructura base this.http.get('').subscribe( (respuesta) => {});
  private cargarCategorias_old(){

    //lectura de archivo json local
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: any) => {

      //console.log("Respuesta: ",respuesta);
      //console.log("Categorias: ",respuesta['frutas']);
    });
  }

  //buscar la informacion del Json
  private cargarCategorias(){
    console.log("Metodo privado Cargar categorias");

    //estructura base this.http.get('').subscribe( (respuesta) => {});
    this.http.get('assets/data/categorias.json')
    .subscribe( (respuesta: Categoria) => {
      this.categoria = respuesta;

      console.log("Respuesta: ", this.categoria);
      //console.log("categorias: ",respuesta['frutas']);
    });
  }

    private cargarCategoriasWeb(){
    this.http.get('https://learsixela.github.io/productos_json/productos.json')
    .subscribe( (respuesta) => {
      console.log("Respuesta desde la web: ",respuesta);
    });


  }
}
