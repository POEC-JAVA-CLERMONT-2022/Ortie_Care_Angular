import {HttpHeaders} from "@angular/common/http";

export class UrlApiConstantes {

  /** Header */
  static headers: {headers: HttpHeaders} = {
    headers: new HttpHeaders({
      'Content-Type': 'application/ld+json',
    })
  };

  /** STEAMISH 
  static urlApi: string = 'https://steam-ish.test-02.drosalys.net';
  static urlGames: string = '/api/games?page=1';
  static urlAccountsPaginated: string = '/api/accounts?page=1';
  static urlAccounts: string = '/api/accounts/';
  static urlPostAccounts: string = '/api/accounts'; */

  /** Digimon 
  static urlDigimon: string = 'https://digimon-api.herokuapp.com/api/digimon';
  static urlDigimonLevel: string = 'https://digimon-api.herokuapp.com/api/digimon/level/';
  */

  /** OrtieCare */
  static urlApi: string = 'http://localhost:8080/api';
  static urlLegumes: string = '/legumes/';
  static urlLegumesGetAll: string = '/legumes/getAll';
  static urlLegumesBySol: string = '/legumes/sol/';
  static urlSols: string = '';
  static urlUsers: string = '';



}
