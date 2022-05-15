import { Conseils } from "./ConseilDeCulture";
import { Sols } from "./Sols";

export class Legumes {

    constructor(
      private _idLegume: string,
      private _nom: string,
      private _autoReseme: boolean,
      private _isGousse: boolean,
      private _tempsAvantRecolteEnMois: string,
      private _poidsMoyenFruitEnG: string,
      private _conseilsDeCulture: Array<Conseils>,
      private _legumesAssocies: Array<Legumes>,
      private _bestSol: Sols

    ) { }
  
    get idLegume(): string {
      return this. _idLegume;
    }

    get nom(): string {
      return this._nom;
    }
  
    set nom(value: string) {
      this._nom = value;
    }
    
    get autoReseme(): boolean {
      return this._autoReseme;
    }
  
    set autoReseme(value: boolean) {
      this._autoReseme = value;
    }

    get isGousse(): boolean {
      return this._isGousse;
    }
  
    set isGousse(value: boolean) {
      this._isGousse = value;
    }

    get tempsAvantRecolteEnMois(): string {
      return this._tempsAvantRecolteEnMois;
    }
  
    set tempsAvantRecolteEnMois(value: string) {
      this._tempsAvantRecolteEnMois = value;
    }

    get poidsMoyenFruitEnG(): string {
      return this._poidsMoyenFruitEnG;
    }
  
    set poidsMoyenFruitEnG(value: string) {
      this._poidsMoyenFruitEnG = value;
    }

    get conseilsDeCulture(): Array<Conseils> {
      return this._conseilsDeCulture;
    }
  
    set conseilsDeCulture(value: Array<Conseils>) {
      this._conseilsDeCulture = value;
    }

    get legumesAssocies(): Array<Legumes> {
      return this._legumesAssocies;
    }
  
    set legumesAssocies(value: Array<Legumes>) {
      this._legumesAssocies = value;
    }
    
    get bestSol(): Sols {
      return this._bestSol;
    }
  
    set bestSol(value: Sols) {
      this._bestSol = value;
    }
  }
  