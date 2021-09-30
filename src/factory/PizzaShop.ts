import { PizzaType } from "./PizzaType";
import { Pizza } from "./Pizza";

export abstract class PizzaShop {
 orderPizza = (pizzaType:PizzaType) => {
   const pizza = this.createPizza(pizzaType);

   console.log("\n\nOrder pizza\n\n")
   pizza.prepare();
   pizza.cook();
   pizza.cut();
   pizza.wrap();
 }

 protected abstract createPizza(pizzaType:PizzaType): Pizza;
}