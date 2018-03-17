import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient.model';
import { ShoppingService } from '../../service/shopping.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];
  ingredients: Ingredient[];
  private ingredientsChangedSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
  }


  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }

// onAddBtnClicked(event: {name: string, amount: number}): void {
    // this.ingredients.push(event);
  // }

}
