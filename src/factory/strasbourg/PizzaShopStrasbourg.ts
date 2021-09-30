import { PizzaShop } from "../PizzaShop";
import { PizzaType } from "../PizzaType";
import { Pizza } from "../Pizza";
import { PizzaStrasbourgCheese } from "./PizzaStrasbourgCheese";
import { PizzaStrasbourgPeppers } from "./PizzaStrasbourgPeppers";
import { PizzaStrasbourgSeafood } from "./PizzaStrasbourgSeafood";
import { PizzaStrasbourgVegetarian } from "./PizzaStrasbourgVegetarian";

export class PizzaShopStrasbourg extends PizzaShop{
  protected createPizza(pizzaType: PizzaType): Pizza {
    if(pizzaType === PizzaType.CHEESE) {
      return new PizzaStrasbourgCheese();
    }
    if(pizzaType === PizzaType.PEPPERS) {
      return new PizzaStrasbourgPeppers();
    }
    if(pizzaType === PizzaType.SEAFOOD) {
      return new PizzaStrasbourgSeafood();
    }
    if(pizzaType === PizzaType.VEGETARIAN) {
      return new PizzaStrasbourgVegetarian();
    }
    throw new Error("The pizza type provided doest not exist");
  }
}
