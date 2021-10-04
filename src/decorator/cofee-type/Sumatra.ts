import { Beverage } from "../Beverage";

export class Sumatra extends Beverage {
  getCost(): number {
    return 16;
  }

  getDescription(): string {
    return "Sumatra";
  }
}