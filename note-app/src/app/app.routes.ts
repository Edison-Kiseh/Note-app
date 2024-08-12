import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BinComponent } from './bin/bin.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'bin', component: BinComponent},
    {path: 'notebooks', component: NotebooksComponent},
    // {path: ':param', component: HomeComponent},

    {path: '404-page', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/404-page'}
];
