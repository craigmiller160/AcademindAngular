import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../model/recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.init();
  }

}
