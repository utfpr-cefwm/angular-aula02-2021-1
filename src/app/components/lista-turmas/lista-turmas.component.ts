import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Turma } from 'src/app/models/turma';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css']
})
export class ListaTurmasComponent implements OnInit, OnDestroy {

  public turmas?: Turma[];

  private subOnDestroy: Subject<void> = new Subject();

  constructor(
    private turmaService: TurmaService,
  ) {
  }

  ngOnInit(): void {
    this.turmaService.get().pipe(
      takeUntil(this.subOnDestroy),
    ).subscribe(
      (turmas: Turma[]) => {
        this.turmas = turmas;
        console.log('Chegaram as turmas!', turmas);
      },
    );
  }

  ngOnDestroy(): void {
    this.subOnDestroy.next();
    this.subOnDestroy.complete();
  }

}
