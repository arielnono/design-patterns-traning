import { Dough } from "./ingredients-families/dough/Dough";
import { Cheese } from "./ingredients-families/cheese/Cheese";
import { Sauce } from "./ingredients-families/sauce/Sauce";
import { Vegetable } from "./ingredients-families/vegetable/Vegetable";
import { Seafood } from "./ingredients-families/seafood/Seafood";

export interface IngredientsFactory {
  createDough():Dough;
  createCheese(): Cheese;
  createSauce():Sauce;
  createVegetables(): Vegetable[];
  createSeafood(): Seafood;
}