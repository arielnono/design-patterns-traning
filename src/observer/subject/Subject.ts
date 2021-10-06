import {Observer} from '../displays/Observer';

export interface Subject {
  addObserver(observer: Observer):void;
  removeObserver(observer: Observer):void;
  notifyObservers():void;
}