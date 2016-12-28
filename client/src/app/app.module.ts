// core modules
import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy }         from '@angular/common';
import { AppComponent }                 from './app.component';
import { routing }                      from './app.routing';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';

// shared
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';

// routes
import { HttpModule, JsonpModule }      from '@angular/http';

// Layouts
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

// Pages
import { SincronizarModule }         from './sincronizar/sincronizar.module';
import { AjudaModule }               from './ajuda/ajuda.module';
import { PayoutModule }              from './payout/payout.module';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule,
        Ng2BootstrapModule,
        SincronizarModule,
        AjudaModule,
        PayoutModule
    ],
    declarations: [
        AppComponent,
        SimpleLayoutComponent,
        BreadcrumbsComponent
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy,
    }],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
