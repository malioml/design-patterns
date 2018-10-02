import IDisplayBehaviour from "./display/IDisplayBehaviour";
import IFlyBehaviour from "./fly/IFlyBehaviour";
import IQuackBehaviour from "./quack/IQuackBehaviour";

class Duck {
    displayBehaviour : IDisplayBehaviour
    flyBehaviour  : IFlyBehaviour
    quackBehaviour : IQuackBehaviour

    constructor(displayBehaviour : IDisplayBehaviour, flyBehaviour  : IFlyBehaviour, quackBehaviour : IQuackBehaviour) {
        this.displayBehaviour = displayBehaviour
        this.flyBehaviour = flyBehaviour
        this.quackBehaviour = quackBehaviour
    }
}

export default Duck
