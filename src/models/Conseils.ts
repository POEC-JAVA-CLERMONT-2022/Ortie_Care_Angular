
export class Conseils {

    constructor(
      private _idConseil: string,
      private _titre: string,
      private _description: string
    ) { }
  
    get idConseil(): string {
      return this._idConseil;
    }

    get titre(): string {
      return this._titre;
    }
  
    set titre(value: string) {
      this._titre = value;
    }
    
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }    
  }
  