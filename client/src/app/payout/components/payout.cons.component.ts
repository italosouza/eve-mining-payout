import { Component, OnInit }        from '@angular/core';
import { Observable }               from 'rxjs/Rx';
import { Http }                     from '@angular/http';
import { ActivatedRoute }           from '@angular/router';
import { ConsComponent } from '../../shared/cons.component';
import { Payout }                  from '../models/payout';
import { PayoutService }          from '../services/payout.service';


@Component({
  templateUrl: './payout.cons.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutConsComponent extends ConsComponent implements OnInit {

  protected service: PayoutService;
  public filtro = new Payout();
  public objeto: Payout;

  constructor(private http: Http, protected pRoute: ActivatedRoute) {
    super(pRoute);
    this.service = new PayoutService(this.objeto, http);
   }

  ngOnInit() {}

  public calcularPayout() {
    this.loading = true;
    this.aviso = '';
    this.service.calcularPayout(this.filtro)
      .subscribe(
        resultado => {
          resultado.sort(function(a, b){
            let r = a.oreName > b.oreName;
            return r;
          });
          resultado.sort(function(a, b){
            let r = a.playerName > b.playerName;
            return r;
          });
          this.lista = resultado;
        },
        err => {
          this.aviso = err;
          this.loading = false;
          console.log(err);
        },
        () => { this.loading = false; });
    }

}
