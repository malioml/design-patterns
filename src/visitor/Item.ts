import Visitable from "./Visitable";
import Visitor from "./Visitor";

class Item implements Visitable {
    quantity: number

    constructor(quantity: number = 25) {
        this.quantity = quantity
    }

    accept(visitor: Visitor): void {
        visitor.visit(this)
    }

}

export default Item
