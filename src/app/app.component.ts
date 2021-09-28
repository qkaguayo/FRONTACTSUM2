import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service'
import { CategoriaService } from './services/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-app';

  constructor(public productosService: ProductosService, public categoriaService: CategoriaService) { 
    //Json o consumo de API
    console.log("AppComponent")
  }
}
