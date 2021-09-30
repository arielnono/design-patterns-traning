import { Pizza } from "../Pizza";

export class PizzaBrestVegetarian extends Pizza {
  prepare(): void {
    console.log('Step 1: We prepare your delicious Brest vegetarian pizza\n');
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Brest vegetarian pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Brest vegetarian pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Brest vegetarian pizza\n');
  }
}