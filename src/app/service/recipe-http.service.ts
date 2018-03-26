import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../model/recipe.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RecipeHttpService {

  constructor(private http: Http) { }

  loadRecipes(): Observable<Recipe[]> {
    return this.http.get('https://ng-recipe-book-cac34.firebaseio.com/data.json')
      .map(response => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }

  saveRecipes(recipes: Recipe[]): Observable<Recipe[]> {
    const headers = new Headers({
      'content-type': 'application/json'
    });
    return this.http.put('https://ng-recipe-book-cac34.firebaseio.com/data.json', recipes, {headers: headers})
      .map(response => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error);
      });
  }

}
