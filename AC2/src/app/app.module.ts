import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CadastroAlunoComponent,
    CalcularMediaComponent,
    ApoliceSeguroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
