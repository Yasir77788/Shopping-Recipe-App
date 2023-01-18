import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a test1", 
    "https://thumbs.dreamstime.com/b/recipe-book-21748775.jpg"),
    new Recipe("A Test Recipe", "This is a test2", 
    "https://thumbs.dreamstime.com/b/recipe-book-21748775.jpg"),
    new Recipe("A Test Recipe", "This is a test3", 
    "https://thumbs.dreamstime.com/b/recipe-book-21748775.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }
}
