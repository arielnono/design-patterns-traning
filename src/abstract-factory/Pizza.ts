import { Dough } from "./ingredients-families/dough/Dough";
import { Cheese } from "./ingredients-families/cheese/Cheese";
import { Sauce } from "./ingredients-families/sauce/Sauce";
import { Seafood } from "./ingredients-families/seafood/Seafood";
import { Vegetable } from "./ingredients-families/vegetable/Vegetable";
import { IngredientsFactory } from "./IngredientsFactory";

export abstract class Pizza {
  protected dough!: Dough;
  protected cheese!: Cheese;
  protected sauce!: Sauce;
  protected seaFood!: Seafood;
  protected vegetables!: Vegetable[]
  constructor(ingredientsFactory: IngredientsFactory) {
    this.cheese = ingredientsFactory.createCheese();
    this.dough = ingredientsFactory.createDough();
    this.sauce = ingredientsFactory.createSauce();
    this.seaFood = ingredientsFactory.createSeafood();
    this.vegetables = ingredientsFactory.createVegetables();
  }

  private getVegetablesDescription () {
    return this.vegetables.reduce((previousValue, currentValue, currentIndex) => {
      if(currentIndex !== 0) {
        return `${previousValue} - ${currentValue.getVegetableName()}`
      }
      return currentValue.getVegetableName();
    }, "")
  }

  protected getIngredientsDescription(): string {
    return `Dough = ${this.dough.getDoughDescription()} | Cheese = ${this.cheese.getCheeseName()} | Sauce = ${this.sauce.getSauceName()} | Seafood = ${this.seaFood.getSeafoodName()} | Vegetables = ${this.getVegetablesDescription()}`;
  }

  abstract prepare():void;
  abstract cook():void;
  abstract cut():void;
  abstract wrap():void;
}