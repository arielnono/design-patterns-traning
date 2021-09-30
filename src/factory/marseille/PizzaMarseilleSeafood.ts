import { Pizza } from "../Pizza";

export class PizzaMarseilleSeafood extends Pizza {
  prepare(): void {
    console.log('Step 1: We prepare your delicious Marseille cheese pizza\n');
  }  
  cook(): void {
    console.log('Step 2: We cook your delicious Marseille cheese pizza\n');
  }
  cut(): void {
    console.log('Step 3: We cut your delicious Marseille cheese pizza\n');
  }
  wrap(): void {
    console.log('Step 4: We wrap your delicious Marseille cheese pizza\n');
  }
}