import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css'],
})
export class IngredientsComponent implements OnInit {
  recipeId: number | null = null;
  recipe: any;
  cart: any[] = [];
  total: number = 0
  constructor(
    private route: ActivatedRoute,
    public recipeService: RecipeService,
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
    this.recipeService.clearCart();
  }

  removeFromCart(ingredient: string, recipe_name: string) {
    this.recipeService.removeFromCart(ingredient, recipe_name);
  }


  operation(operator:string, ingredient: any){
    this.recipeService.operation(operator, ingredient);
  }

  toCart(ingredient: any){
    this.recipeService.toCart(ingredient)
  }

  clearCart(){
    this.recipeService.clearCart()
  }
}
