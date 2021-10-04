import { Ingredient } from "./Ingredient";

export class Chantilly extends Ingredient {
  getCost(): number {
    return this.beverage.getCost() + 2;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()} with chantilly`;
  }

}