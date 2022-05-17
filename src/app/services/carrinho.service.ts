import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carrinho } from '../models/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  url = 'http://localhost:3000/carrinho';

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  mostraMensagem(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 2000,
      panelClass: ['warning'],
      verticalPosition: "bottom",
    })
  }

  adicionarCarrinho(carrinho: Carrinho): Observable<Carrinho> {
    return this.httpClient.post<Carrinho>(this.url, carrinho);
  }

  read(): Observable<Carrinho[]> {
    return this.httpClient.get<Carrinho[]>(this.url)
  }

  deletar(id: string) {
    return this.httpClient.delete<Carrinho>(`${this.url}/${id}`, this.httpOptions)
    .subscribe()
  }
}
