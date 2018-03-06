import { Component, Input, OnInit } from '@angular/core';
import { ShoppingService } from '../../service/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {

  }

  toShoppingList(): void {
    this.recipe.ingredients.forEach(ingredient => this.shoppingService.addIngredient(ingredient));
  }

}
