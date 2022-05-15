import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';
import {
  delay, map
} from 'rxjs/operators';
import { Aluno } from '../models/aluno';
import { Disciplina } from '../models/disciplina';

import { Turma } from '../models/turma';

const TURMAS = [
  {
    '_id': '2324776abcdef78238972314',
    'ano': 2021,
    'periodo': 1,
    'disciplina': {
      '_id': 'bcdef7863216498126934',
      'codigo': 'WEB03',
      'nome': 'Angular',
    },
    'alunos': [
      {
        '_id': 'febcad69283569243865',
        'codigo': 111,
        'nome': 'João Francisco Neto',
      },
      {
        '_id': '9871346912354876abc',
        'codigo': 333,
        'nome': 'Jaqueline dos Santos',
      },
    ],
  },
  {
    '_id': '23186934561827936abc234',
    'ano': 2021,
    'periodo': 1,
    'disciplina': {
      '_id': '7894798423785abc4756',
      'codigo': 'WEB11',
      'nome': 'Git',
    },
    'alunos': [
      {
        '_id': 'bcef12839746502629348',
        'codigo': 222,
        'nome': 'Enzo Ferreira',
      },
      {
        '_id': 'a37215423bc783456',
        'codigo': 888,
        'nome': 'Valentina dos Anjos',
      },
    ],
  },
];

@Injectable({
  providedIn: 'root',
})
export class TurmaService {

  constructor(
  ) {
  }

  /**
   * Lista as turmas do banco de dados com detalhes.
   */
  public get(): Observable<Turma[]> {
    return of(TURMAS).pipe(
      delay(1000),
      map(arr => {

        // Transforma o array de objetos crus em array de models:
        return arr.map(t => {
          return new Turma(
            new Disciplina(
              t.disciplina.codigo,
              t.disciplina.nome,
            ),
            t.ano,
            t.periodo,
            t.alunos.map(a => new Aluno(
              a.codigo,
              a.nome,
            )),
          );
        });

      }),
    );
  }

}
