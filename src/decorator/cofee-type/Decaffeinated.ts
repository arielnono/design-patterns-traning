import { Beverage } from "../Beverage";

export class Decaffeinated extends Beverage {
  getCost(): number {
    return 96;
  }
  getDescription(): string {
    return "Decaffeinated";
  }
}