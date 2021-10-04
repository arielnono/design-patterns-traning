import { Ingredient } from "./Ingredient";

export class Caramel extends Ingredient {
  getCost(): number {
    return this.beverage.getCost() + 12;
  }
  getDescription(): string {
    return `${this.beverage.getDescription()} with caramel`;
  }

}