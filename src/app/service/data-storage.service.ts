import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../model/recipe.model';
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  private readonly headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes(): Observable<Response> {
    return this.http.put('https://ng-recipe-book-cac34.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {headers: this.headers});
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get('https://ng-recipe-book-cac34.firebaseio.com/recipes.json')
      .map(response => response.json());
  }

}
