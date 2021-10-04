import { Beverage } from "../Beverage";

export class Colombia extends Beverage {
  getCost(): number {
    return 16;
  }
  getDescription(): string {
    return "Colombia";
  }
}