import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/models/carrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {

  carrinhoForm = {
    id: "",
    preco: "",
    nome: "",
    quantidade: ""
  }

  carrinho: Carrinho[]
  displayedColumns = ['id','nome','preco','quantidade','action']


  constructor(private carrinhoService: CarrinhoService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.carregaCarrinho();
  }

  carregaCarrinho() {
    this.carrinhoService.read().subscribe((carrinho: Carrinho[] )=> {
      this.carrinho = carrinho;
    })
  }

  deleta(id: string) {
    this.carrinhoService.deletar(id)
    this.carregaCarrinho()
  }

}
