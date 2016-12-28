import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';
import { RouterModule }               from '@angular/router';

import { AjudaComponent } from './components/ajuda.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule

  ],
  declarations: [
    AjudaComponent
  ],

  providers: [],

  exports: [
    AjudaComponent
  ]

})
export class AjudaModule {
}

