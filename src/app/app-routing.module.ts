import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeComponent },
  { path: 'recipe/:id', component: IngredientsComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
