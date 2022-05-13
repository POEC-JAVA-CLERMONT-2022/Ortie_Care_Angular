import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPageAccueilComponent } from './app-page-accueil/app-page-accueil.component';
import { AppGenerateurComponent } from './app-generateur/app-generateur.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ConseilListComponent } from './conseil-list/conseil-list.component';
import { LegumesListComponent } from './legumes-list/legumes-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppPageAccueilComponent,
    AppGenerateurComponent,
    NavigationComponent,
    ConseilListComponent,
    LegumesListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
