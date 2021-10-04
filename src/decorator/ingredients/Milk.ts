import { Ingredient } from "./Ingredient";

export class Milk extends Ingredient {
  getCost(): number {
    return this.beverage.getCost() + 42;
  }
  getDescription(): string {
    return `${this.beverage.getDescription()} with milk`;
  }
}