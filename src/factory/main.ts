import { PizzaType } from "./PizzaType";
import { PizzaShopBrest } from "./brest/PizzaShopBrest";
import { PizzaShopMarseille } from "./marseille/PizzaShopMarseille";
import { PizzaShopStrasbourg } from "./strasbourg/PizzaShopStrasbourg";

const pizzaShopBrest = new PizzaShopBrest();
pizzaShopBrest.orderPizza(PizzaType.PEPPERS);

const pizzaShopMarseille = new PizzaShopMarseille();
pizzaShopMarseille.orderPizza(PizzaType.VEGETARIAN);

const pizzaShopStrasbourg =  new PizzaShopStrasbourg();
pizzaShopStrasbourg.orderPizza(PizzaType.SEAFOOD);
