import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg

  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe #1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  //   new Recipe('A Test Recipe #2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  // ];
  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

}
