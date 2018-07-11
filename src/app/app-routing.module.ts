import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EasypunchlineComponent } from '../app/components/easypunchline/easypunchline.component';

import { TelechargementComponent } from '../app/components/telechargement/telechargement.component';

import { FooterEasypunchComponent } from '../app/components/footer-easypunch/footer-easypunch.component';

import { ActualiteComponent } from '../app/components/actualite/actualite.component';


import { HistoireComponent } from '../app/components/histoire/histoire.component';


import {PolitiqueComponent} from './components/politique/politique.component';

import {ConfidentialiteComponent} from './components/confidentialite/confidentialite.component';

import {ConditionComponent} from './components/condition/condition.component';

import {ReglesComponent} from './components/regles/regles.component';

import {HomepageComponent} from './components/homepage/homepage.component';


const routes: Routes = [

  { path: 'easypunchline', component: EasypunchlineComponent },
  { path: 'telechargement', component: TelechargementComponent },
  { path: 'easyinc', component: FooterEasypunchComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'histoire', component: HistoireComponent },
  { path: 'politique', component: PolitiqueComponent },
  { path: 'confidentialite', component: ConfidentialiteComponent },
  { path: 'condition', component: ConditionComponent },
  { path: 'regles', component: ReglesComponent },






  { path: '', component: HomepageComponent }


];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]


})
export class AppRoutingModule { }
