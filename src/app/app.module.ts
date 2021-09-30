import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { NotFoundComponent } from './compartida/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CarritoComponent } from './component/carrito/carrito.component';
import { EliminarproductoComponent } from './component/eliminarproducto/eliminarproducto.component';
import { ActualizarproductoComponent } from './component/actualizarproducto/actualizarproducto.component';
import { LoginModule } from './login/login.module';
import { ComponentModule } from './component/component.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProductosComponent,
    CategoriaComponent,
    NotFoundComponent,
    CarritoComponent,
    EliminarproductoComponent,
    ActualizarproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //siempre importarlo para ngmodule
    FormsModule,
    HttpClientModule,
    LoginModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
