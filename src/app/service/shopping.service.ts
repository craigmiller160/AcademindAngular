import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Injectable()
export class ShoppingService {

  // List of ingredients
  // Add ingredient

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientAdded = new EventEmitter<void>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }

}
