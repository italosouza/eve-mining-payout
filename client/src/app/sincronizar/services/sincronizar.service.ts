import { Injectable }         from '@angular/core';
import { Http }               from '@angular/http';
import { Sincronizar }        from '../models/sincronizar';


@Injectable()
export class SincronizarService {

  protected serviceURL: String;

  constructor (protected objeto: Sincronizar, protected http: Http) {
    this.serviceURL = 'http://localhost:8080/sincronizar';
  }
}
