import { Pizza } from "../Pizza";

export class PizzaStrasbourgSeafood extends Pizza {
  prepare(): void {
    console.log(`Step 1: We prepare your delicious Strasbourg seafood pizza with ${this.getIngredientsDescription()}\n`);
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Strasbourg seafood pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Strasbourg seafood pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Strasbourg seafood pizza\n');
  }
}