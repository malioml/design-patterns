import IObserver from "../observers/IObserver";

interface IObservable {
    add(observer: IObserver) : void
    remove(observer: IObserver) : void
    notify() : void
    setTemperature(temperature: number) : void
    getTemperature(): number
}

export default IObservable
