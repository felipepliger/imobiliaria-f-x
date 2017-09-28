import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApruaapiacasComponent } from './apruaapiacas/apruaapiacas.component';
import { AddimovelComponent } from './addimovel/addimovel.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addimovel', component: AddimovelComponent },
    { path: 'ap0001', component: ApruaapiacasComponent }
]