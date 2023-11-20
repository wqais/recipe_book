import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes = [
    {
      id: 1,
      name: 'Burger',
      image:
        'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A delicious burger with the power of Veggies!',
      ingredients: [
        { name: 'Bread', price: 50, unit: 'packet', qty: 0 },
        { name: 'Lettuce', price: 80, unit: 'piece', qty: 0 },
        { name: 'Tomato', price: 40, unit: 'kg', qty: 0 },
        { name: 'Onion', price: 100, unit: 'kg', qty: 0 },
        { name: 'Ketchup', price: 150, unit: 'kg', qty: 0 },
      ],
      steps: [
        {step: "Step 1: Bake bread to form a bun."},
        {step: "Step 2: Place the patty on the bun"},
        {step: "Step 3: Chop some veggies"},
        {step: "Step 4: Add the veggies on top of the patty"},
        {step: "Step 5: Add mayonnaise and cheese to the burger"},
        {step: "Step 6: Add ketchup as necessary"}
      ]
    },
    {
      id: 2,
      name: 'Pizza',
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Authentic Italian style pizza!',
      ingredients: [
        { name: 'Wheat Flour', price: 80, unit: 'kg', qty: 0 },
        { name: 'Corn', price: 100, unit: 'kg', qty: 0 },
        { name: 'Olive', price: 350, unit: 'kg', qty: 0 },
        { name: 'Jalapeno', price: 400, unit: 'kg', qty: 0 },
        { name: 'Cheese', price: 450, unit: 'kg', qty: 0 },
        { name: 'Tomato', price: 40, unit: 'kg', qty: 0 },
      ],
      steps: [
        {step: "Step 1: Make dough out of flour."},
        {step: "Step 2: Make ketchup out of fresh tomatoes."},
        {step: "Step 3: Spread some tomato ketchup on the dough."},
        {step: "Step 4: Add toppings on the dough"},
        {step: "Step 5: Add cheese on the dough."},
        {step: "Step 6: Bake it and your pizza is ready!"}
      ]
    },
    {
      id: 3,
      name: 'Kebab',
      image:
        'https://images.unsplash.com/photo-1595777216528-071e0127ccbf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Our favourite chicken kebab recipe!',
      ingredients: [
        { name: 'Chicken', price: 80, unit: 'kg', qty: 0 },
        { name: 'Corn', price: 100, unit: 'kg', qty: 0 },
        { name: 'Onion', price: 100, unit: 'kg', qty: 0 },
        { name: 'Bread', price: 50, unit: 'packet', qty: 0 },
        { name: 'Tomato', price: 40, unit: 'packet', qty: 0 },
      ],
      steps: [
        {step: "Step 1: Fine chop some chicken."},
        {step: "Step 2: Shape it to form kebabs."},
        {step: "Step 3: Add some veggies to the mixture."},
        {step: "Step 4: Dip the kebabs in flour."},
        {step: "Step 5: Use bread crumbs on the outer side of kebabs."},
        {step: "Step 6: Add kebabs to tandoor and enjoy."}
      ]
    },
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

  qty: number = 0;
  operation(operator: string, ingredient: any) {
    switch (operator) {
      case '+':
        ingredient.qty++;
        break;
      case '-':
        if (ingredient.qty > 0) {
          ingredient.qty--;
        }
        break;
      default:
        ingredient.qty = 0;
    }
  }

  cart: any[] = [];
  total: number = 0;
  toCart(ingredient: any) {
    const cartIndex = this.cart.findIndex(
      (item) => item.name == ingredient.name
    );
    if (cartIndex == -1) {
      this.cart.push({ ...ingredient });
    } else {
      this.cart[cartIndex].qty++;
    }
    this.total += ingredient.qty * ingredient.price;
  }

  removeFromCart(ingredient: any, recipe_name: string) {
    const cartIndex = this.cart.findIndex(
      (item) => item.name == ingredient.name
    );
    if (cartIndex !== -1) {
      this.cart.splice(cartIndex, 1);
      const recipeIndex = this.recipes.findIndex(
        (item) => item.name === recipe_name
      );
      const ingredientIndex = this.recipes[recipeIndex].ingredients.findIndex(
        (item) => item.name === ingredient.name
      );      
      console.log(ingredientIndex)
      if (ingredientIndex !== -1) {
        this.total = this.total - ingredient.qty * ingredient.price;
        this.recipes[recipeIndex].ingredients[ingredientIndex].qty = 0;
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredient.qty = 0;
      });
    });
    this.total = 0;
  }
}
