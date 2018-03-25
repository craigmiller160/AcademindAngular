import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../service/shopping.service';
import { Recipe } from '../../model/recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipe: Recipe;

  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  toShoppingList(): void {
    this.shoppingService.addAllIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe(): void {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
