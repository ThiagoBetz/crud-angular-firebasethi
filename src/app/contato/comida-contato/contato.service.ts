import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Contato } from './contao';



@Injectable({

  providedIn: 'root'

})

export class ContatoService {

  listaContatosRef: AngularFireList<Contato>;

  contatoRef: AngularFireObject<Contato>;



  constructor(private db: AngularFireDatabase) {

    //inicialização dos caminhos ao firebase

    this.listaContatosRef = this.db.list('list-contatos');


    this.contatoRef = this.db.object('list-contatos/' + 0);

  }



  getComida(): AngularFireList<Contato> {

    return this.listaContatosRef;

  }

  // Inserir Contato

  insertContato(contato: Contato) {

    this.listaContatosRef.push({

      nome: contato.nome,

      telefone: contato.telefone,

      idade: contato.idade,

    });

  }



  // Buscar um único Objeto Contato pelo seu ID

  getContatoById(id: string): AngularFireObject<Contato> {

    this.contatoRef = this.db.object('list-contatos/' + id);

    return this.contatoRef;

  }



  // Fetch Students List

  getContatoList(): AngularFireList<Contato> {

    return this.listaContatosRef;

  }



  // Update Student Object

  updateContato(contato: Contato) {

    this.contatoRef.update({

      nome: contato.nome,

      telefone: contato.telefone,

      idade: contato.idade,

    });

  }



  // Delete Student Object

  deleteContato(id: String) {

    this.contatoRef = this.db.object('list-contatos/' + id);

    this.contatoRef.remove();

  }

}
