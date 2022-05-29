import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTurmasComponent } from './components/lista-turmas/lista-turmas.component';
import { TurmaDetalhesComponent } from './components/turma-detalhes/turma-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTurmasComponent,
    TurmaDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
