
export class Users {

    constructor(
      private _idUser: string,
      private _password: string,
      private _firstName: string,
      private _lastName: string,
      private _email: string,
      private _isAdmin: boolean
    ) { }
  
    get idUser(): string {
      return this._idUser;
    }

    get password(): string {
      return this._password;
    }
  
    set password(value: string) {
      this._password = value;
    }
    
    get firstName(): string {
      return this._firstName;
    }
  
    set firstName(value: string) {
      this._firstName = value;
    }

    get lastName(): string {
      return this._lastName;
    }
  
    set lastName(value: string) {
      this._lastName = value;
    }

    get email(): string {
      return this._email;
    }
  
    set email(value: string) {
      this._email = value;
    }

    get isAdmin(): boolean {
      return this._isAdmin;
    }
  
    set isAdmin(value: boolean) {
      this._isAdmin = value;
    }
    
  }
  