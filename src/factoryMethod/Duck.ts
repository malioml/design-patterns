import IAnimal from "./IAnimal";

class Duck implements IAnimal {
    display() {
        console.log('displaying a duck ....')
    }

    getType(): string {
        return 'ducks';
    }
}

export default Duck
