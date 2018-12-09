import Visitor from "./Visitor";
import Visitable from "./Visitable";

class Player implements Visitor {
    health: number

    constructor(health: number = 100) {
        this.health = health;
    }

    visit(visitable: Visitable): void {
        this.health = Math.min(100, this.health + visitable.quantity)
        console.log(`player health is ${this.health}`)
    }

}

export default Player
