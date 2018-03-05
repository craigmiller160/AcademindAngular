import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../model/ingredient.model';
import { ShoppingService } from '../../service/shopping.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() addBtnClicked = new EventEmitter<Ingredient>();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddBtnClicked(): void {
    // this.addBtnClicked.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    this.shoppingService.onAddIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
