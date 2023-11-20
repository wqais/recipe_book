import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  recipeId: number | null = null; // Initialize to null

  recipe: any;
  cart: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.recipeId = +idParam;
      this.recipe = this.recipeService.getRecipeById(this.recipeId);
    } else {
      this.router.navigate(['/recipes']);
    }
  }

  addToCart(ingredient: string) {
    this.recipeService.addToCart(ingredient);
  }

  removeFromCart(ingredient: string) {
    this.recipeService.removeFromCart(ingredient);
  }

  getCart() {
    this.cart = this.recipeService.getCart();
  }
}
