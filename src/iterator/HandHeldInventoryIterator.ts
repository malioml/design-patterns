class HandHeldInventoryIterator implements IInventoryIterator {
	inventory: HandHeldInventory
	index: number = 0
	
	constructor(handHeldInventory: HandHeldInventory) {
		this.inventory = handHeldInventory
	}
	
	isDone(): boolean {
		return this.index < 2
	}
	
	next(): void {
		this.index += 1
	}
	
	current(): IItem {
		switch (this.index) {
			case 0 : return this.inventory.right
			case 1 : return this.inventory.left
			default : return null
		}
	}
}

export default HandHeldInventoryIterator
