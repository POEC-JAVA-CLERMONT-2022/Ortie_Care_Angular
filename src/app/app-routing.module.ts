import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGenerateurComponent } from './app-generateur/app-generateur.component';
import { AppPageAccueilComponent } from './app-page-accueil/app-page-accueil.component';
import { ConseilListComponent } from './conseil-list/conseil-list.component';
import { LegumesListComponent } from './legumes-list/legumes-list.component';

const routes: Routes = [
  {path:'conseils', component: ConseilListComponent},
  {path:'legumes', component: LegumesListComponent},
  {path:'', component: AppPageAccueilComponent},
  {path:'generateur', component: AppGenerateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
