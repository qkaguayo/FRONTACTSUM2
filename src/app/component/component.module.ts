import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { PruebasComponent } from './pruebas/pruebas.component';



@NgModule({
  declarations: [
    ModalComponent,
    PruebasComponent
  ],
  exports: [
    ModalComponent,
    PruebasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentModule { }
