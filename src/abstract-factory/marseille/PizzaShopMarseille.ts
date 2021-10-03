import { PizzaShop } from "../PizzaShop";
import { Pizza } from "../Pizza";
import { PizzaType } from "../PizzaType";
import { PizzaMarseillePeppers } from "./PizzaMarseillePeppers";
import { PizzaMarseilleSeafood } from "./PizzaMarseilleSeafood";
import { PizzaMarseilleVegetarian } from "./PizzaMarseilleVegetarian";
import { PizzaMarseilleCheese } from "./PizzaMarseilleCheese";
import { IngredientsFactoryMarseille } from "./IngredientsFactoryMarseille";
import { IngredientsFactory } from "../IngredientsFactory";

export class PizzaShopMarseille extends PizzaShop{
  private ingredientFactory:IngredientsFactory;
  
  constructor() {
    super();
    this.ingredientFactory = new IngredientsFactoryMarseille();
  }
  protected createPizza(pizzaType: PizzaType): Pizza {
    if(pizzaType === PizzaType.CHEESE) {
      return new PizzaMarseilleCheese(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.PEPPERS) {
      return new PizzaMarseillePeppers(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.SEAFOOD) {
      return new PizzaMarseilleSeafood(this.ingredientFactory);
    }
    if(pizzaType === PizzaType.VEGETARIAN) {
      return new PizzaMarseilleVegetarian(this.ingredientFactory);
    }
    throw new Error("The pizza type provided doest not exist");
  }
}