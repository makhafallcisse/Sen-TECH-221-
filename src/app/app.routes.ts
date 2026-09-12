import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Contact } from './pages/contact/contact';
export const routes: Routes = [
     { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Accueil },
  { path: 'contact', component: Contact }
];
