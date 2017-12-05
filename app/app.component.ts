import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Grandma's Recipe Box</h1>
  <div id="theo">
  </div>
  <div *ngFor="let currentRecipe of recipes" class="card">
    <div class="left">
      <h2>{{currentRecipe.title}}</h2>
      <img src= {{currentRecipe.image}}>
      <h4>{{currentRecipe.time}}</h4>
      <p>Ingredients</p>
      <ul>
        <li *ngFor="let ingredient of currentRecipe.ingredients">{{ingredient}}</li>
      </ul>
    </div>
    <div class="right">
      <p id="directions">Directions</p>
      <ol>
        <li *ngFor="let direction of currentRecipe.directions">{{direction}}</li>
      </ol>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Curry Chicken", "resources/img/curry.jpg", "35 minutes", ["2 lbs of chicken", "curry to taste"], ["Put ingredients in casserole dish.", "Shake well.", "Place in oven.", "Take out when brown."]),
    new Recipe("Chicken Adobo", "resources/img/adobo.jpg", "40 minutes", ["2 lbs of chicken", "soy sauce", "vinegar", "bay leaves", "garlic", "peppercorn", "potatoes", "carrots", "olive oil or some oil"], ["Sauté the garlic in oil til golden brown.", "Add chicken.", "Add soy sauce and vinegar, and let simmer until chicken pretty cooked.", "Oh yeah, there are potatoes and carrots, you should add those.", "I don't know when the peppercorn or bay leaves, but those should go in at some point.", "When it smells awesome, eat it. Over rice is great!"]),
    new Recipe("Banana Bread", "resources/img/banana.jpg", "1 hour 25 minutes", ["bananas", "flour", "sugar", "an egg", "butter", "water"], ["Mash bananas.", "Add butter, water, and egg to bananas and mix well.", "In a separate bowl, mix dry ingredients.", "Slowly fold dry ingredients into wet ingredients.", "Pour into baking dish.", "Bake for 1 hour at 325 degrees.", "Eat when cooled."])
  ];

  // testRecipe: string = 'Curry Chicken';
  // ingredients = {
  //   first : "chicken"
  // }
}

export class Recipe {
  constructor(public title: string, public image: string, public time: string, public ingredients: string[], public directions: string[]){}

}
