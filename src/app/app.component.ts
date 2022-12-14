import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
tarefasArray: string [] = [];

adicionarTarefa(valor:string){
  this.tarefasArray.push(valor);
  console.log("Adicionando uma tarefa");

  //concatenando no angular
  console.log(`Adicionando a tarefa: ${valor}`);
}

  constructor() {

  }
}
