import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductosComponent} from './component/productos/productos.component';
import {CategoriaComponent} from './component/categoria/categoria.component';
import {NotFoundComponent} from './compartida/not-found/not-found.component';

const routes: Routes = [
  {path: 'producto', component: ProductosComponent },
  {path: 'categoria', component: CategoriaComponent },
  
  {path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
