import { Component, Input, OnInit } from '@angular/core';

import { Turma } from 'src/app/models/turma';

@Component({
  selector: 'app-turma-detalhes',
  templateUrl: './turma-detalhes.component.html',
  styleUrls: ['./turma-detalhes.component.css']
})
export class TurmaDetalhesComponent implements OnInit {

  @Input()
  public turma!: Turma;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
