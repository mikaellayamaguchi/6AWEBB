import { Routes } from '@angular/router';
// Import your components here so the routes can find them
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { JoinUsComponent } from './join-us/join-us.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join-us', component: JoinUsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
