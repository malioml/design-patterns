import Milk from "./Milk";
import Caramel from "./Caramel";
import Espresso from "./Espresso";

export default () => {
    console.log('------------ Start Decorator Pattern --------------')
    const espresso = new Espresso()
    console.log(`espresso price cost: ${espresso.cost()}`)
    const espressoWithMilk = new Milk(espresso)
    console.log(`espresso with milk cost: ${espressoWithMilk.cost()}`)
    const espressoWithMilkWithCaramel = new Caramel(espressoWithMilk)
    console.log(`espresso with milk and caramel cost: ${espressoWithMilkWithCaramel.cost()}`)
    console.log('------------ End Decorator Pattern --------------')
}
