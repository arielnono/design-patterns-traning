import { Pizza } from "../Pizza";

export class PizzaStrasbourgCheese extends Pizza {
  prepare(): void {
    console.log(`Step 1: We prepare your delicious Strasbourg cheese pizza with ${this.getIngredientsDescription()}\n`);
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Strasbourg cheese pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Strasbourg cheese pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Strasbourg cheese pizza\n');
  }
}