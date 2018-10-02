import IFlyBehaviour from "./IFlyBehaviour";

class SimpleFly implements IFlyBehaviour {
    fly() {
        console.log('fly like a normal duck!')
    }
}

export default SimpleFly
