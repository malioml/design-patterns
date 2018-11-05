export default () => {
    console.log('------------ Start Iterator Pattern --------------')

    const inventory = new HandHeldInvetory()
    const iterator = inventory.getIterator()

    while(!iterator.isDone()) {
        const item = iterator.current()
        item.doSomething()
        iterator.next()
    }

    console.log('------------ End Iterator Pattern --------------')
}
