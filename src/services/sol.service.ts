import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlApiConstantes} from "./url-api-constantes";
import { Sols } from 'src/models/Sols';

@Injectable({
  providedIn: 'root'
})
export class SolServiceService {

  constructor(private httpClient: HttpClient) { }

  getSols(): Observable<Array<Sols>> {
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlSols);
    return this.httpClient.get<Array<Sols>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlSols);
  }
}
