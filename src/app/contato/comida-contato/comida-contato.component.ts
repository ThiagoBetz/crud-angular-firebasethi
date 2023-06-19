import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../contato.service';

import { ToastrService } from 'ngx-toastr';

import { Contato } from '../contato';

@Component({
  selector: 'app-comida-contato',
  templateUrl: './comida-contato.component.html',
  styleUrls: ['./comida-contato.component.css']
})

export class ComidaContatoComponent implements OnInit {
page = 1;

comidaContatos: Contato[] = [];

comidaVazia: Boolean = true;

mostrarLoader: Boolean = true;



constructor(

  private contatoService: ContatoService,

  private toastr: ToastrService

) {}



ngOnInit() {


(data: any[]) => {

    this.comidaContatos = [];

    if (data.length <= 0) {

      this.comidaVazia = true;

    } else {

      this.comidaVazia = false;

      data.forEach((item: any) => {

        let contato = item.payload.toJSON();

        contato['$key'] = item.key;

        this.comidaContatos.push(contato as Contato);

      });

    }

    this.mostrarLoader = false;

  };

}



deleteContato(contato: Contato) {

  if (window.confirm('Tem certeza que deseja remover o contato?')) {

    if (contato.$key != null) {

      this.contatoService.deleteContato(contato.$key);

      this.toastr.success(contato.nome + ' removido com sucesso.');

    }

  }

}

}
