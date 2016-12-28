import { Component, OnInit }      from '@angular/core';
import { Http }                   from '@angular/http';
import { ActivatedRoute }         from '@angular/router';
import { Payout }                from '../models/payout';
import { PayoutService }        from '../services/payout.service';

@Component({
  templateUrl: './payout.cad.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutCadComponent implements OnInit {

  private service: PayoutService;
  public objeto = new Payout();

  constructor(private http: Http, protected pRoute: ActivatedRoute) {
    this.service = new PayoutService(this.objeto, http);
  }

  ngOnInit() {}

}
