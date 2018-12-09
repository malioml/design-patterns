import Visitable from "./Visitable";

interface Visitor {
    health: number
    visit(visitable: Visitable): void
}

export default Visitor
