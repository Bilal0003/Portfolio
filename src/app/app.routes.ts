import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';
import { SortingVisualiserComponent } from './works/sorting-visualiser/sorting-visualiser.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    
    { path:'home', component:HomeComponent, title: "Home - Bilal's Portfolio"},
    { path:'works', component:WorksComponent , title: "Works - Bilal's Portfolio"},
    { path: 'works/project/sorting-visualiser', component:SortingVisualiserComponent},
    { path:'', redirectTo: '/home', pathMatch:'full' },

];
