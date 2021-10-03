import { IngredientsFactory } from "../IngredientsFactory";
import { Dough } from "../ingredients-families/dough/Dough";
import { Cheese } from "../ingredients-families/cheese/Cheese";
import { Sauce } from "../ingredients-families/sauce/Sauce";
import { Vegetable } from "../ingredients-families/vegetable/Vegetable";
import { Seafood } from "../ingredients-families/seafood/Seafood";
import { Onions } from "../ingredients-families/vegetable/Onions";
import { Pepper } from "../ingredients-families/vegetable/Pepper";
import { ThickDough } from "../ingredients-families/dough/ThickDough";
import { GoatCheese } from "../ingredients-families/cheese/GoatCheese";
import { BruschettaSauce } from "../ingredients-families/sauce/BruschettaSauce";
import { Eggplant } from "../ingredients-families/vegetable/Eggplant";
import { FrozenMussels } from "../ingredients-families/seafood/FrozenMussels";

export class IngredientsFactoryMarseille implements IngredientsFactory {
  createDough(): Dough {
    return new ThickDough();
  }
  createCheese(): Cheese {
    return new GoatCheese();
  }
  createSauce(): Sauce {
    return new BruschettaSauce();
  }
  createVegetables(): Vegetable[] {
    return [new Onions(), new Eggplant(), new Pepper()]
  }
  createSeafood(): Seafood {
    return new FrozenMussels()
  }
}