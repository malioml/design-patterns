import IObserver from "../observers/IObserver";

interface IObservable {
    add(observer: IObserver) : void
    remove(observer: IObserver) : void
    notify() : void
    setTemperature(temperature: Number) : void
    getTemperature(): Number
}

export default IObservable
