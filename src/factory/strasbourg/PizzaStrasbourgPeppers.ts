import { Pizza } from "../Pizza";

export class PizzaStrasbourgPeppers extends Pizza {
  prepare(): void {
    console.log('Step 1: We prepare your delicious Strasbourg peppers pizza\n');
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Strasbourg peppers pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Strasbourg peppers pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Strasbourg peppers pizza\n');
  }
}