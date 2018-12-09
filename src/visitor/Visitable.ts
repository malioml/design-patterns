import Visitor from "./Visitor";

interface Visitable {
    quantity: number
    accept(visitor: Visitor): void
}

export default Visitable
