
export class Sols {

    constructor(
      private _idSol: string,
      private _nomSol: string,
      private _textureSol: string,
      private _structureSol: string,
      private _avantageSol: string,
      private _inconvenientSol: string
    ) { }
  
    get idSol(): string {
      return this._idSol;
    }

    get nomSol(): string {
      return this._nomSol;
    }
  
    set nomSol(value: string) {
      this._nomSol = value;
    }
    
    get textureSol(): string {
      return this._textureSol;
    }
  
    set textureSol(value: string) {
      this._textureSol = value;
    }

    get structureSol(): string {
      return this._structureSol;
    }
  
    set structureSol(value: string) {
      this._structureSol = value;
    }

    get avantageSol(): string {
      return this._avantageSol;
    }
  
    set avantageSol(value: string) {
      this._avantageSol = value;
    }

    get inconvenientSol(): string {
      return this._inconvenientSol;
    }
  
    set inconvenientSol(value: string) {
      this._inconvenientSol = value;
    }
    
  }
  