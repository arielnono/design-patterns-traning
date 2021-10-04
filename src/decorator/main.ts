import {Decaffeinated} from './cofee-type/Decaffeinated';
import { Milk } from './ingredients/Milk';
import {Chocolate} from './ingredients/Chocolate';
import { Espresso } from './cofee-type/Espresso';
import { Chantilly } from './ingredients/Chantilly';
import { Sumatra } from './cofee-type/Sumatra';

const beverage0 = new Sumatra();
console.log("You have ordered a", beverage0.getDescription(), "which cost:", beverage0.getCost(), "euros");

const beverage = new Chocolate(new Milk(new Decaffeinated()));
console.log("You have ordered a", beverage.getDescription(), "which cost:", beverage.getCost(), "euros");

const beverage2 = new Milk(new Chocolate(new Chantilly(new Espresso())));
console.log("You have ordered a", beverage2.getDescription(), "which cost:", beverage2.getCost(), "euros");