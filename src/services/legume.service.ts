import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiResult} from "../models/i-api-result";
import {Legumes} from "../models/Legumes";
import {UrlApiConstantes} from "./url-api-constantes";



@Injectable({
  providedIn: 'root'
})
export class LegumeServiceService {

  constructor(private httpClient: HttpClient) { }

  getLegumes(): Observable<Array<Legumes>> {
    console.log(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesGetAll);
    return this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlApi+UrlApiConstantes.urlLegumesGetAll);
  }

  // getLegumeBySolId(solId: string): Observable<Array<Legumes>> {
  //   console.log(UrlApiConstantes.urlLegumesBySol + solId);
  //   return this.httpClient.get<Array<Legumes>>(UrlApiConstantes.urlLegumesBySol + solId);
  // }
}
