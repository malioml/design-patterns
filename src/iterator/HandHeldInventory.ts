import IInventory from "./IInventory";
import IItem from "./IItem";
import IInventoryIterator from "./IInventoryIterator";

class HandHeldInventory implements IInventory{
    right: IItem
    left: IItem

    constructor(right: IItem, left: IItem) {
        this.right = right
        this.left = left
    }

    getIterator(): IInventoryIterator {
        return new HandHeldInventoryIterator(this)
    }

}
