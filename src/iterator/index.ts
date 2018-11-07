import HandHeldInventory from "./HandHeldInventory";
import LeftHand from "./LeftHand";
import RightHand from "./RightHand";

export default () => {
    console.log('------------ Start Iterator Pattern --------------')

    const rightHand = new RightHand()
    const leftHand = new LeftHand()
    const inventory = new HandHeldInventory(rightHand, leftHand)
    const iterator = inventory.getIterator()

    while(!iterator.isDone()) {
        const item = iterator.current()
        item.doSomething()
        iterator.next()
    }

    console.log('------------ End Iterator Pattern --------------')
}
