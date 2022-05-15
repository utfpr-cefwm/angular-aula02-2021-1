import { Component } from '@angular/core';

import { Turma } from './models/turma';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  public turmaParaExibir?: Turma;

  public exibeTurma(turma: Turma): void {
    this.turmaParaExibir = turma;
  }

}
