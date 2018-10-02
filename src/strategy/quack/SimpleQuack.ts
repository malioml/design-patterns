import IQuackBehaviour from "./IQuackBehaviour";

class SimpleQuack implements IQuackBehaviour {
    quack() {
        console.log('quack quack!')
    }
}

export default SimpleQuack
