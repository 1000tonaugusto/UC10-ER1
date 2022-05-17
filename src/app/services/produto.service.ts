import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})


export class ProdutoService {

  url = 'http://localhost:3000/produto';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({'Content-type':'application/json'})
  }
}
