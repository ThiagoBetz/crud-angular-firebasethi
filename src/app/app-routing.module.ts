
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AddContatoComponent } from './contato/add-contato/add-contato.component';

import { ListContatoComponent } from './contato/list-contato/list-contato.component';

import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';

import { ComidaContatoComponent } from './contato/comida-contato/comida-contato.component';



const routes: Routes = [

  { path: '', redirectTo: '/list-contato', pathMatch: 'full' },

  { path: 'add-contato', component: AddContatoComponent },

  { path: 'list-contato', component: ListContatoComponent },

  { path: 'edit-contato/:id', component: EditContatoComponent },

  { path: 'comida-contato/:id', component: ComidaContatoComponent }

];

@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],

  exports: [RouterModule],

  declarations: []

})

export class AppRoutingModule { }
