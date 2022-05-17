import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novidades } from '../models/novidades';

@Injectable({
  providedIn: 'root'
})
export class NovidadesService {

  url = "http://localhost:3000/novidades";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    Headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getNovidades(): Observable<Novidades[]> {
    return this.httpClient.get<Novidades[]>(this.url)
  }

}
