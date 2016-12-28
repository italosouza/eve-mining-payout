import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CoreObject } from './core.object';

// Import RxJs required methods
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceComponent {

  protected jwToken: string;
  protected serviceURL = 'http://localhost:8080/receita';

  constructor(protected pObjeto: CoreObject, protected http: Http) {
    this.jwToken = sessionStorage.getItem('auth_token');
  }

  // serialização de objeto para queryString
  protected serializarFiltro(pFiltro: CoreObject, bQueryString: Boolean = true): string {
    let arFiltro = [];
    let sFiltro = '';
    for (let p in pFiltro) {
      if (pFiltro.hasOwnProperty(p) && pFiltro[p] !== null) {
        arFiltro.push(encodeURIComponent(p) + '=' + encodeURIComponent(pFiltro[p]));
      }
    }
    if (bQueryString) {
      sFiltro = '?';
    }
    sFiltro += arFiltro.join('&');
    return sFiltro;
  }

  // método generico para conversão de array em Objetos
  protected toObject<T>(classeReferencia: { new(): T; }, arDados: any): T {
    let novoObjeto: T = new classeReferencia();
    for (let indice in arDados) {
      if (arDados.hasOwnProperty(indice)) {
          novoObjeto[indice] = arDados[indice];
      }
    }
    console.log(novoObjeto);
    return novoObjeto;
  }

  protected getHeader(): Headers {
      let headers = new Headers();
      headers.append('x-auth', this.jwToken);
      return headers;
  }

  // realiza o mapeamento do Json para o Objeto
  protected mapCoreObject(res: any): any {
    console.log('Conversão do objeto não realizada na entidade service.');
    return res;
  }

  // realiza o mapeamento de uma coleção de Json em um Array de Objetos
  protected mapCoreCollection(res: any): Array<any> {
    let data: Array<CoreObject> = [];
    for (let item of res) {
      let obj = <CoreObject>this.mapCoreObject(item);
      data.push(obj);
    }
    return data;
  };

  public getObjeto(id): Observable<any> {
    let options = new RequestOptions({ headers: this.getHeader() });

    return this.http.get(`${this.serviceURL}/${id}/`, options)
      .map((res: Response) => this.mapCoreObject(res.json()));
    }

  public getLista(): Observable<any[]> {
    let options = new RequestOptions({ headers: this.getHeader() });

    return this.http.get(this.serviceURL, options)
      .map((res: Response) => this.mapCoreCollection(res.json()));
  }

  public adicionar (body: CoreObject): Observable<any> {
    let options = new RequestOptions({ headers: this.getHeader() });

    return this.http.post(this.serviceURL, body, options)
      .map((res: Response) => this.mapCoreObject(res.json()));
  }

  public atualizar (body: CoreObject): Observable<any> {
    let options = new RequestOptions({ headers: this.getHeader() });

    return this.http.put(`${this.serviceURL}/${body._id}/`, body, options)
      .map((res: Response) => this.mapCoreObject(res.json()));
  }

  public excluir (objeto: CoreObject): Observable<string> {
    let options = new RequestOptions({ headers: this.getHeader() });

    return this.http.delete(`${this.serviceURL}/${objeto._id}`, options)
      .map((res: Response) => res.json());
  }
}
