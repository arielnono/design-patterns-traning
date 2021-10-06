import { Subject } from "./Subject";
import { Observer } from "../displays/Observer";
import { WeatherDataType } from "./WeatherDataType";

export class WeatherData implements Subject{
  private observers: Observer[];
  private weatherData: WeatherDataType;

  constructor() {
    this.observers = [];
    this.weatherData = {
      temperature: "0",
      humidity: "0",
      airPressure: "0"
    };
  }
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }  
  
  removeObserver(observerToBeRemoved: Observer): void {
    this.observers = this.observers.filter(observer => !observer.isEqual(observerToBeRemoved));
  }

  notifyObservers(): void {
    console.log("\n\n Notify observers\n")
    this.observers.forEach(observer => observer.updateObserver(this.weatherData))
  }

  setWeatherData(weatherData: WeatherDataType): void {
    this.weatherData = weatherData;
    this.notifyObservers()
  }
}