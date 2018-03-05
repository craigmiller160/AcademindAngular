import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.recipe = recipe);
  }

}
