import { formatDate } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.sass']
})
export class PruebasComponent implements OnInit {

  Titulo: string = 'Curso de Angular Basico';

  Fecha: number = new Date().getTime();
  Fecha1: string = formatDate(new Date(), 'dd/MM/yyyy', 'en');
  Fecha2: string = Date.now().toString();
  Mes: number = new Date().getMonth() + 1;
  //puede ser de los 3 tipos de datos (number|null|string)
  Dia: number|null= null;
  Contador: number =0;
  //
  dias_semana:string[]=['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  eliminado: null|string|undefined = null;
  //for(let dia of dias_semana) {}

//variables formulario
email: string| null = null; 
password: string|null = "";

Agregado: string|null = null;



  constructor() { 
    console.log("Constructor pruebas");
  }

  ngOnInit(): void {
    console.log('ngOnInit Pruebas');
  }

  //set y gets
  get getMesNumber() : number {
    return this.Mes;
  }

  get getDiaNumber() : number|null {
    return this.Dia;
  }

  get getContadorNumber() : number {
    return this.Contador;
  }
  
  //metodos o funciones (logica de negocio)

    obtenerDia(): void {
      this.Dia = new Date().getDay();
    }

    sumar(): void {
      this.Contador++;
    }

    restar(): void {
      this.Contador--;
    }

    eliminar(): void {
      this.eliminado = this.dias_semana.pop();
    }

    agregar(nuevo: string): void{
      
    }
    
    insertar(): void {
      console.log("metodo insertar...")
      console.log(this.email, this.password);

    }

    insertar2(event: any): void {
      console.log(" metodo insertar 2...");
      event.preventDefault();
      console.log(event);
      }
}
