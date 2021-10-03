import { Pizza } from "../Pizza";

export class PizzaBrestSeafood extends Pizza {
  prepare(): void {
    console.log(`Step 1: We prepare your delicious Brest cheese pizza with ${this.getIngredientsDescription()}\n`);
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Brest seafood pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Brest seafood pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Brest seafood pizza\n');
  }
}