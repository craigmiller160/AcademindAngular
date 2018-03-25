import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../service/recipe.service';
import { Ingredient } from '../../model/ingredient.model';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      // If there is no ID, then the path contains "new" and it's not in edit mode
      this.editMode = params['id'] !== undefined && params['id'] !== null;
      this.initForm();
    });
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients.length > 0) {
        recipe.ingredients.forEach(ingredient => recipeIngredients.push(this.createIngredientControl(ingredient)));
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit(): void {
    if (this.editMode) {
      // If the object has the same signature as the TypeScript class, it can be passed as a typed parameter
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient(): void {
    this.getIngredientsArray().push(this.createIngredientControl());
  }

  getIngredientsArray(): FormArray {
    return (<FormArray>this.recipeForm.get('ingredients'));
  }

  onDeleteIngredient(index: number): void {
    this.getIngredientsArray().removeAt(index);
  }

  onCancel(): void {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private createIngredientControl(ingredient?: Ingredient): FormGroup {
    const name = ingredient ? ingredient.name : null;
    const amount = ingredient ? ingredient.amount : null;
    return new FormGroup({
      'name': new FormControl(name, Validators.required),
      'amount': new FormControl(amount, [Validators.required, Validators.pattern(/^[1-9}+[0-9]*$/)])
    });
  }

}
