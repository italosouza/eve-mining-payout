import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import { RouterModule }               from '@angular/router';

import { SincronizarComponent } from './components/sincronizar.component';

import { SincronizarService } from './services/sincronizar.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule

  ],
  declarations: [
    SincronizarComponent
  ],

  providers: [
      SincronizarService
  ],

  exports: [
    SincronizarComponent
  ]

})
export class SincronizarModule {
}

