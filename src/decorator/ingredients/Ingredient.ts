import { Beverage } from "../Beverage";

export abstract class Ingredient extends Beverage {
  protected beverage: Beverage;

  constructor (beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
}