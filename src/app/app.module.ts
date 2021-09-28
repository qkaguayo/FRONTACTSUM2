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
import { PruebasComponent } from './component/pruebas/pruebas.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { RegistrarseComponent } from './component/registro/registro.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProductosComponent,
    CategoriaComponent,
    NotFoundComponent,
    PruebasComponent,
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //siempre importarlo para ngmodule
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
