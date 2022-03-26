import { Component, OnInit } from '@angular/core';
import { TarefaService } from './tarefa.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public tarefas: TarefaService) {}  

  ngOnInit() {}
}
