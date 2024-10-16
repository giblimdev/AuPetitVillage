import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { FicheComponent } from './fiche/fiche.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'articles/:id', component: FicheComponent, title: 'Fiche article' },
  { path: 'home', component: HomeComponent, title: 'accueil' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent, title: '404' },
];
