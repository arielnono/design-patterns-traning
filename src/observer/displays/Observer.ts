import { WeatherDataType } from "../subject/WeatherDataType";

export abstract class Observer {
  private name:string;
  constructor(name:string) {
    this.name = name;
  }
  getName():string {
    return this.name;
  }
  isEqual(observer: Observer): boolean {
    return observer.getName() === this.name
  }
  
  abstract updateObserver(weatherData: WeatherDataType):void;
}