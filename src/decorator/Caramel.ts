import Beverage from "./Beverage";
import AddonDecorator from "./AddonDecorator";

class Caramel extends AddonDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    cost(): number {
        return this.beverage.cost() + 0.50
    }

}

export default Caramel
