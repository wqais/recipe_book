import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  recipes = this.recipeService.getRecipes();

  constructor(private recipeService: RecipeService) {}
}
