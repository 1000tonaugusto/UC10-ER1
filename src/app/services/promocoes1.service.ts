import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocoes1 } from '../models/promocoes1';

@Injectable({
  providedIn: 'root'
})
export class Promocoes1Service {

  url = 'http://localhost:3000/promocoes1';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getPromocoes1(): Observable<Promocoes1[]> {
    return this.httpClient.get<Promocoes1[]>(this.url)
  }
}
