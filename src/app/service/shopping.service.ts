import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.findAndAddIngredient(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
