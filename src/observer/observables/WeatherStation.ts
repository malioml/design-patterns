import IObservable from "./IObservable";
import IObserver from "../observers/IObserver";

class WeatherStation implements IObservable {
    observers: Array<IObserver>
    temperature: number

    constructor() {
        this.observers = []
    }

    add(observer: IObserver): void {
        console.log(`observer ${observer.getName()} was added`)
        this.observers.push(observer)
    }

    notify(): void {
        this.observers.forEach(observer => observer.update())
    }

    remove(observer: IObserver): void {
        console.log(`observer ${observer.getName()} was removed`)
        this.observers = this.observers.filter(elem => elem !== observer)
    }

    setTemperature(temperature: number): void {
        this.temperature = temperature
        this.notify();
    }

    getTemperature(): number {
        return this.temperature
    }

}

export default WeatherStation
