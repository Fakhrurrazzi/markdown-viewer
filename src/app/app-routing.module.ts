import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentationsComponent } from './home/documentations/documentations.component';
import { RecipesComponent } from './home/recipes/recipes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'documentations/:documentName', component: DocumentationsComponent},
  { path: 'recipes/:recipeName', component: RecipesComponent},

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
