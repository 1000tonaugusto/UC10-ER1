import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from '../models/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CompraItemService {

  url = 'http://localhost:3000/carrinho';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getCarrinho(): Observable<Carrinho[]> {
    return this.httpClient.get<Carrinho[]>(this.url)
  }

  postCarrinho(carrinho: Carrinho): Observable<any> {
    return this.httpClient.post(this.url, JSON.stringify(carrinho), this.httpOptions)
  }

  teste(carrinho:any) {
    return this.httpClient.post(this.url, carrinho);
  }
}
