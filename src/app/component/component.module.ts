import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PagoComponent } from './pago/pago.component';



@NgModule({
  declarations: [
    ModalComponent,
    PruebasComponent,
    PagoComponent
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
