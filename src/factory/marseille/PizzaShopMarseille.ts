import { PizzaShop } from "../PizzaShop";
import { Pizza } from "../Pizza";
import { PizzaType } from "../PizzaType";
import { PizzaMarseillePeppers } from "./PizzaMarseillePeppers";
import { PizzaMarseilleSeafood } from "./PizzaMarseilleSeafood";
import { PizzaMarseilleVegetarian } from "./PizzaMarseilleVegetarian";
import { PizzaMarseilleCheese } from "./PizzaMarseilleCheese";

export class PizzaShopMarseille extends PizzaShop{
  protected createPizza(pizzaType: PizzaType): Pizza {
    if(pizzaType === PizzaType.CHEESE) {
      return new PizzaMarseilleCheese();
    }
    if(pizzaType === PizzaType.PEPPERS) {
      return new PizzaMarseillePeppers();
    }
    if(pizzaType === PizzaType.SEAFOOD) {
      return new PizzaMarseilleSeafood();
    }
    if(pizzaType === PizzaType.VEGETARIAN) {
      return new PizzaMarseilleVegetarian();
    }
    throw new Error("The pizza type provided doest not exist");
  }
}