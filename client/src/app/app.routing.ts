import { Routes, RouterModule }         from '@angular/router';

// Layouts
import { SimpleLayoutComponent }        from './layouts/simple-layout.component';

// Pages
import { SincronizarComponent }         from './sincronizar/components/sincronizar.component';
import { AjudaComponent }               from './ajuda/components/ajuda.component';

import { PayoutConsComponent }          from './payout/components/payout.cons.component';


const appRoutes: Routes = [
    // raiz da navegação

    // navegação sem menu
    { path: '', component: SimpleLayoutComponent, data: { title: 'Pages' },
        // paginas visualizadas sem o menu
        children: [
            { path: '', component: PayoutConsComponent, data: { title: 'Payout' } },
            { path: 'ajuda', component: AjudaComponent, data: { title: 'Ajuda' } },
            { path: 'payout', component: PayoutConsComponent, data: { title: 'Payout' } }
        ]
    }
];

export const routing = RouterModule.forRoot(appRoutes);
