import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingService {

  // List of ingredients
  // Add ingredient

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  // readonly ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.findAndAddIngredient(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  private findAndAddIngredient(ingredient: Ingredient): void {
    const existingIngredient = this.ingredients.find(element => element.name === ingredient.name);
    if (existingIngredient) {
      existingIngredient.amount = Number(existingIngredient.amount) + Number(ingredient.amount);
    } else {
      this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    }
  }

  addAllIngredients(ingredients: Ingredient[]): void {
    ingredients.forEach(ingredient => this.findAndAddIngredient(ingredient));
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
