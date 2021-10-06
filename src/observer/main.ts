import { WeatherData } from "./subject/WeatherData";
import { Statistics } from "./displays/Statistics";
import { Forecast } from "./displays/Forecast";
import { CurrentConditions } from "./displays/CurrentConditions";

const weatherData  = new WeatherData();
const statisticsDisplay =  new Statistics();
const forecastDisplay =  new Forecast();
const currentConditionsDisplay =  new CurrentConditions();

weatherData.addObserver(statisticsDisplay);
weatherData.addObserver(forecastDisplay);
weatherData.addObserver(currentConditionsDisplay);

weatherData.setWeatherData({
  temperature: "1", 
  humidity: "2",
  airPressure: "3",
});

weatherData.setWeatherData({
  temperature: "8", 
  humidity: "20",
  airPressure: "3",
});

weatherData.removeObserver(statisticsDisplay);

weatherData.setWeatherData({
  temperature: "80", 
  humidity: "80",
  airPressure: "83",
});