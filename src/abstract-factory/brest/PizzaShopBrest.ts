import { PizzaShop } from "../PizzaShop";
import { Pizza } from "../Pizza";
import { PizzaType } from "../PizzaType";
import { PizzaBrestCheese } from "./PizzaBrestCheese";
import { PizzaBrestPeppers } from "./PizzaBrestPeppers";
import { PizzaBrestSeafood } from "./PizzaBrestSeafood";
import { PizzaBrestVegetarian } from "./PizzaBrestVegetarian";
import { IngredientsFactory } from "../IngredientsFactory";
import { IngredientsFactoryBrest } from "./IngredientsFactoryBrest";

export class PizzaShopBrest extends PizzaShop{
  private ingredientFactory:IngredientsFactory;
  
  constructor() {
    super();
    this.ingredientFactory = new IngredientsFactoryBrest();
  }
  protected createPizza(pizzaType: PizzaType): Pizza {
    if(pizzaType === PizzaType.CHEESE) {
      return new PizzaBrestCheese(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.PEPPERS) {
      return new PizzaBrestPeppers(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.SEAFOOD) {
      return new PizzaBrestSeafood(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.VEGETARIAN) {
      return new PizzaBrestVegetarian(this.ingredientFactory);
    }
    throw new Error("The pizza type provided doest not exist");
  }
}