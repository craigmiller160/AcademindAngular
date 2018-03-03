import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  // selectedRecipe = new Recipe('', '', '');
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

}
