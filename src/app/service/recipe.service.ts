import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { RecipeHttpService } from './recipe-http.service';

@Injectable()
export class RecipeService {

  // private recipes: Recipe[] = [
  //   new Recipe('Tasty Schnitzel', 'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', [
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('French Fries', 20)
  //     ]),
  //   new Recipe('Big Fat Burger', 'What else do you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', [
  //       new Ingredient('Beef', 1),
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Cheese', 1)
  //     ])
  // ];
  private recipes: Recipe[];
  recipesChanged = new Subject<Recipe[]>();

  constructor(private recipeHttp: RecipeHttpService) { }

  getRecipes(): Recipe[] {
    return this.recipes ? this.recipes.slice() : [];
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipeHttp.saveRecipes(this.recipes.slice())
      .subscribe(recipes => this.recipesChanged.next(recipes));
  }

  updateRecipe(index: number, recipe: Recipe): void {
    this.recipes[index] = recipe;
    this.recipeHttp.saveRecipes(this.recipes.slice())
      .subscribe(recipes => this.recipesChanged.next(recipes));
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
    this.recipeHttp.saveRecipes(this.recipes.slice())
      .subscribe(recipes => this.recipesChanged.next(recipes));
  }

  init(): void {
    this.recipeHttp.loadRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
        this.recipesChanged.next(recipes.slice());
      });
  }

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

}
