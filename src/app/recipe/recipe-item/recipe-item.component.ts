import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import { RecipeService } from '../../service/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() selectRecipe = new EventEmitter<Recipe>();
  @Input() id: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  // onRecipeClick(): void {
  //   // this.selectRecipe.emit(this.recipe);
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
