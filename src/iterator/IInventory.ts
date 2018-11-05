import IInventoryIterator from "./IInventoryIterator";

interface IInventory {
    getIterator(): IInventoryIterator
}

export default IInventory
