import IItem from "./IItem";

interface IInventoryIterator {
    isDone(): boolean
    next(): void
    current(): IItem
}

export default IInventoryIterator
