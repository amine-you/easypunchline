import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CardHomepageComponent } from './components/card-homepage/card-homepage.component';
import { AudienceComponent } from './components/audience/audience.component';
import { HomepageVideoComponent } from './components/homepage-video/homepage-video.component';
import { MeilleurPunchlineHomepageComponent } from './components/meilleur-punchline-homepage/meilleur-punchline-homepage.component';
import { FoteerComponent } from './components/foteer/foteer.component';
import { EasypunchlineComponent } from './components/easypunchline/easypunchline.component';
import { AppRoutingModule } from './app-routing.module';
import { TelechargementComponent } from './components/telechargement/telechargement.component';
import { FooterEasypunchComponent } from './components/footer-easypunch/footer-easypunch.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { PolitiqueComponent } from './components/politique/politique.component';
import { ConfidentialiteComponent } from './components/confidentialite/confidentialite.component';
import { ConditionComponent } from './components/condition/condition.component';
import { ReglesComponent } from './components/regles/regles.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CardHomepageComponent,
    AudienceComponent,
    HomepageVideoComponent,
    MeilleurPunchlineHomepageComponent,
    FoteerComponent,
    EasypunchlineComponent,
    TelechargementComponent,
    FooterEasypunchComponent,
    ActualiteComponent,
    HistoireComponent,
    PolitiqueComponent,
    ConfidentialiteComponent,
    ConditionComponent,
    ReglesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
