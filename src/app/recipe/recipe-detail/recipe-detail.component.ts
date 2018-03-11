import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../service/shopping.service';
import { Recipe } from '../../model/recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
    this.route.params.subscribe(params => this.recipe = this.recipeService.getRecipe(+params['id']));
  }

  toShoppingList(): void {
    this.shoppingService.addAllIngredients(this.recipe.ingredients);
  }

}
