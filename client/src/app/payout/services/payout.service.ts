import { Injectable }         from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ServiceComponent }   from '../../shared/service.component';
import { Payout }             from '../models/payout';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class PayoutService extends ServiceComponent {

  constructor (protected objeto: Payout, protected http: Http) {
    super(objeto, http);
    this.serviceURL = 'http://localhost:8080/payout';
  }

  protected mapCoreObject (res: any): Payout {
    return this.toObject(Payout, res);
  }

  public calcularPayout (body: Payout): Observable<any> {
    let options = new RequestOptions({ headers: this.getHeader() });

    return this.http.post(this.serviceURL, body, options)
      .map((res: Response) => res.json());
  }


}
