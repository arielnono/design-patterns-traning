import { PizzaShop } from "../PizzaShop";
import { PizzaType } from "../PizzaType";
import { Pizza } from "../Pizza";
import { PizzaStrasbourgCheese } from "./PizzaStrasbourgCheese";
import { PizzaStrasbourgPeppers } from "./PizzaStrasbourgPeppers";
import { PizzaStrasbourgSeafood } from "./PizzaStrasbourgSeafood";
import { PizzaStrasbourgVegetarian } from "./PizzaStrasbourgVegetarian";
import { IngredientsFactory } from "../IngredientsFactory";
import { IngredientsFactoryStrasbourg } from "./IngredientsFactoryMarseille";

export class PizzaShopStrasbourg extends PizzaShop{
  private ingredientFactory:IngredientsFactory;
  
  constructor() {
    super();
    this.ingredientFactory = new IngredientsFactoryStrasbourg();
  }
  protected createPizza(pizzaType: PizzaType): Pizza {
    if(pizzaType === PizzaType.CHEESE) {
      return new PizzaStrasbourgCheese(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.PEPPERS) {
      return new PizzaStrasbourgPeppers(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.SEAFOOD) {
      return new PizzaStrasbourgSeafood(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.VEGETARIAN) {
      return new PizzaStrasbourgVegetarian(this.ingredientFactory);
    }
    throw new Error("The pizza type provided doest not exist");
  }
}
