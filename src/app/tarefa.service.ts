import { Injectable } from '@angular/core';

interface Tarefas {
  nome: string;
}
  
@Injectable()
export class TarefaService {
  tarefas: Array<Tarefas> = [];

  constructor()
 
  { 
     if (localStorage.getItem('tarefas')) {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'));
    } else {
      localStorage.setItem('tarefas', JSON.stringify([]));
    }
    
  }

  adicionarTarefa(nome: string) {
    if (nome != '') {
      this.tarefas.push({
        nome,

      });
      
      console.log(this.tarefas);

      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
  }

  getTarefas() {
    
    if (this.tarefas != null) {
      this.tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }
    return this.tarefas;
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
    localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
  }




 }