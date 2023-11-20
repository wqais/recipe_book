import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes = [
    { id: 1, name: 'Recipe 1', ingredients: ['Ingredient A', 'Ingredient B'] },
    { id: 2, name: 'Recipe 2', ingredients: ['Ingredient X', 'Ingredient Y'] },
    // Add more recipes as needed
  ];

  cart: string[] = [];

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  addToCart(ingredient: string) {
    this.cart.push(ingredient);
  }

  removeFromCart(ingredient: string) {
    const index = this.cart.indexOf(ingredient);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCart() {
    return this.cart;
  }
}
