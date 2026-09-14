import { Routes } from "@angular/router";
import { Accueil } from './pages/accueil/accueil';
import { ProduitDetail } from './pages/produit-detail/produit-detail';
import { APropos } from './pages/a-propos/a-propos';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'produits/:id', component: ProduitDetail },
  { path: 'a-propos', component: APropos },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];