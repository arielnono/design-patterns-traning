import { Beverage } from "../Beverage";

export class Espresso extends Beverage {
  getCost(): number {
    return 6;
  }

  getDescription(): string {
    return "Espresso";
  }
}