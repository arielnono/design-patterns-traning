import { IngredientsFactory } from "../IngredientsFactory";
import { Dough } from "../ingredients-families/dough/Dough";
import { Cheese } from "../ingredients-families/cheese/Cheese";
import { Sauce } from "../ingredients-families/sauce/Sauce";
import { Vegetable } from "../ingredients-families/vegetable/Vegetable";
import { Seafood } from "../ingredients-families/seafood/Seafood";
import { Onions } from "../ingredients-families/vegetable/Onions";
import { Eggplant } from "../ingredients-families/vegetable/Eggplant";
import { MediumDough } from "../ingredients-families/dough/MediumDough";
import { MozarellaCheese } from "../ingredients-families/cheese/MozarellaCheese";
import { CherryTomatoSauce } from "../ingredients-families/sauce/CherryTomatoSauce";
import { Mushrooms } from "../ingredients-families/vegetable/Mushrooms";
import { Squid } from "../ingredients-families/seafood/Squid";

export class IngredientsFactoryStrasbourg implements IngredientsFactory {
  createDough(): Dough {
    return new MediumDough();
  }
  createCheese(): Cheese {
    return new MozarellaCheese();
  }
  createSauce(): Sauce {
    return new CherryTomatoSauce();
  }
  createVegetables(): Vegetable[] {
    return [new Onions(), new Eggplant(), new Mushrooms()]
  }
  createSeafood(): Seafood {
    return new Squid()
  }
}