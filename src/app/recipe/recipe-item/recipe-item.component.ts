import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() selectRecipe = new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeClick(): void {
    // this.selectRecipe.emit(this.recipe);
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
