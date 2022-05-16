import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Legumes} from "../models/Legumes";
import {UrlApiConstantes} from "./url-api-constantes";
import { Sols } from 'src/models/Sols';

@Injectable({
  providedIn: 'root'
})

export class LegumeServiceService {

  constructor(private httpClient: HttpClient) { }

  getLegumes(): Observable<Array<Legumes>> {
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesGetAll);
    return this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesGetAll);
  }

  getLegumesBySol(idSol: string): Observable<Array<Legumes>> {
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesBySol + idSol);
    console.log(this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesBySol + idSol));
    return this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesBySol + idSol);
  }
  
  getLegumesBySolAndId(idSol: string, idLegume: string): Observable<Array<Legumes>> {
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesBySol + idSol + "/" + idLegume);
    return this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesBySol + idSol + "/" + idLegume);
  }

  // getLegumeBySolId(solId: string): Observable<Array<Legumes>> {
  //   console.log(UrlApiConstantes.urlLegumesBySol + solId);
  //   return this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlLegumesBySol + solId);
  // }
}
