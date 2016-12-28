import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }         from '@angular/router';

import { PayoutCadComponent } from './components/payout.cad.component';
import { PayoutConsComponent } from './components/payout.cons.component';

import { PayoutService } from './services/payout.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule

  ],
  declarations: [
    PayoutCadComponent,
    PayoutConsComponent
  ],

  providers: [
      PayoutService
  ],

  exports: [
    PayoutCadComponent,
    PayoutConsComponent
  ]

})
export class PayoutModule {
}

