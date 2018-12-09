import Item from "./Item";
import Player from "./Player";

export default () => {
    console.log('------------ Start Visitor Pattern --------------')

    const item = new Item(25)
    const player = new Player(100)
    item.accept(player)

    const item2 = new Item(25)
    const player2 = new Player(35)
    item2.accept(player2)

    console.log('------------ End Visitor Pattern --------------')
}

