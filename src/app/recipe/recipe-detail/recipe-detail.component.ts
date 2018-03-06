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
    this.shoppingService.addAllIngredients(this.recipe.ingredients);
  }

}
