import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'http://www.lesfoodies.com/_recipeimage/101094/pasta-italiana-per-choupetta.jpg'),
    new Recipe('A test Recipe', 'This is simply a test', 'http://www.lesfoodies.com/_recipeimage/101094/pasta-italiana-per-choupetta.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
