import IQuackBehaviour from "./IQuackBehaviour";

class NoQuack implements IQuackBehaviour {
    quack() {
        console.log('no quack!')
    }
}

export default NoQuack
