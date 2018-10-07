import IAnimal from "./IAnimal";

class Dog implements IAnimal {
    display() {
        console.log('displaying a dog ....')
    }

    getType(): string {
        return 'dogs';
    }
}

export default Dog
