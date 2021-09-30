import { PizzaShop } from "../PizzaShop";
import { Pizza } from "../Pizza";
import { PizzaType } from "../PizzaType";
import { PizzaBrestCheese } from "./PizzaBrestCheese";
import { PizzaBrestPeppers } from "./PizzaBrestPeppers";
import { PizzaBrestSeafood } from "./PizzaBrestSeafood";
import { PizzaBrestVegetarian } from "./PizzaBrestVegetarian";

export class PizzaShopBrest extends PizzaShop{
  protected createPizza(pizzaType: PizzaType): Pizza {
    if(pizzaType === PizzaType.CHEESE) {
      return new PizzaBrestCheese();
    }
    if(pizzaType === PizzaType.PEPPERS) {
      return new PizzaBrestPeppers();
    }
    if(pizzaType === PizzaType.SEAFOOD) {
      return new PizzaBrestSeafood();
    }
    if(pizzaType === PizzaType.VEGETARIAN) {
      return new PizzaBrestVegetarian();
    }
    throw new Error("The pizza type provided doest not exist");
  }
}