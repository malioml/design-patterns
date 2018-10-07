import IAnimal from "./IAnimal";

class Cat implements IAnimal {
    display() {
        console.log('displaying a cat ....')
    }

    getType(): string {
        return 'cats';
    }
}

export default Cat
