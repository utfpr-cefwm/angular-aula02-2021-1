import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Turma } from 'src/app/models/turma';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css']
})
export class ListaTurmasComponent implements OnInit {

  @Output()
  public turmaSelecionada: EventEmitter<Turma> = new EventEmitter();

  public turmas$: Observable<Turma[]> = this.turmaService.get().pipe(
    tap(turmas => {
      console.log('Chegaram as turmas!', turmas);
    }),
  );

  constructor(
    private turmaService: TurmaService,
  ) {
  }

  ngOnInit(): void {
  }

  public selecionaTurma(turma: Turma): void {
    console.log('Clicou na turma', turma);
    this.turmaSelecionada.emit(turma);
  }

}
