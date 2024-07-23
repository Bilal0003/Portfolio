import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch:'full' },
    { path:'home', component:HomeComponent, title: "Home - Bilal's Portfolio"},
    { path:'works', component:WorksComponent, title: "Projects - Bilal's Portfolio"},
];
