import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './Components/template/footer/footer.component';
import { NavComponent } from './Components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './Views/home/home.component';
import { ProductCrudComponent } from './Views/product-crud/product-crud.component';
import { RedDirective } from './Directives/red.directive';
import { ForDirective } from './Directives/for.directive';
import { ProductCreateComponent } from './Components/product/product-create/product-create.component';
/* 
  declarations - lá está a declaração de todos os componentes da aplicação
  imports - lá está os imports de todos os módulos que a aplicação vai usar

  Neste projeto, está sendo usado a framework de estilização do Material Design
  Para utilizar um componente do material, é nescessário primeiro importar o Módulo que esse componente está 

  Ao importar o Módulo, você terá acesso a todos os componentes que estão neste módulo
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
