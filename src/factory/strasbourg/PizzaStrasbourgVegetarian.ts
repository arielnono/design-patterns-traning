import { Pizza } from "../Pizza";

export class PizzaStrasbourgVegetarian extends Pizza {
  prepare(): void {
    console.log('Step 1: We prepare your delicious Strasbourg vegetarian pizza\n');
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Strasbourg vegetarian pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Strasbourg vegetarian pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Strasbourg vegetarian pizza\n');
  }
}