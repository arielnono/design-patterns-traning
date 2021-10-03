import { IngredientsFactory } from "../IngredientsFactory";
import { Dough } from "../ingredients-families/dough/Dough";
import { Cheese } from "../ingredients-families/cheese/Cheese";
import { Sauce } from "../ingredients-families/sauce/Sauce";
import { Vegetable } from "../ingredients-families/vegetable/Vegetable";
import { Seafood } from "../ingredients-families/seafood/Seafood";
import { ThinDough } from "../ingredients-families/dough/ThinDough";
import { ReggianoCheese } from "../ingredients-families/cheese/ReggianoCheese";
import { MarinaraSauce } from "../ingredients-families/sauce/MarinaraSauce";
import { Onions } from "../ingredients-families/vegetable/Onions";
import { Mushrooms } from "../ingredients-families/vegetable/Mushrooms";
import { Pepper } from "../ingredients-families/vegetable/Pepper";
import { FreshMussels } from "../ingredients-families/seafood/FreshMussels";

export class IngredientsFactoryBrest implements IngredientsFactory {
  createDough(): Dough {
    return new ThinDough();
  }
  createCheese(): Cheese {
    return new ReggianoCheese();
  }
  createSauce(): Sauce {
    return new MarinaraSauce();
  }
  createVegetables(): Vegetable[] {
    return [new Onions(), new Mushrooms(), new Pepper()]
  }
  createSeafood(): Seafood {
    return new FreshMussels()
  }
}