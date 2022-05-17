import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appformulario',
  template: '<input id="teste" alt="Teste" matInput type="text" value="teste">',
})

export class AppformularioComponent { 
  nome: string = "Roseweltty"; 
  constructor() {}
  ngOnInit() {}
}