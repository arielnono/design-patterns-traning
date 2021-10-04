import { Ingredient } from "./Ingredient";

export class Chocolate extends Ingredient{
  getCost(): number {
    return this.beverage.getCost() + 90;
  }
  getDescription(): string {
    return `${this.beverage.getDescription()} with chocolate`;
  }

}