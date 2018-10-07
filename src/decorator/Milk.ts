import Beverage from "./Beverage";
import AddonDecorator from "./AddonDecorator";

class Milk extends AddonDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    cost(): number {
        return this.beverage.cost() + 1
    }

}

export default Milk
