import { Pizza } from "../Pizza";

export class PizzaBrestCheese extends Pizza {
  prepare(): void {
    console.log('Step 1: We prepare your delicious Brest cheese pizza\n');
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Brest cheese pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Brest cheese pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Brest cheese pizza\n');
  }
}