import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promocoes2 } from '../models/promocoes2';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Promocoes2Service {

  url = 'http://localhost:3000/promocoes2';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  getPromocoes2(): Observable<Promocoes2[]> {
    return this.httpClient.get<Promocoes2[]>(this.url)
  }
}
