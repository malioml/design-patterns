import IObserver from "./IObserver";
import IObservable from "../observables/IObservable";

class Television implements IObserver {
    observable: IObservable
    name: String

    constructor(observable: IObservable, name: String) {
        this.observable = observable
        this.name = name
    }

    getName(): String {
        return this.name;
    }

    update(): void {
        console.log(`showing temperature: ${this.observable.getTemperature()} on TV`);
    }
}

export default Television
