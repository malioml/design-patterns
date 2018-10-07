import IAnimalFactory from "./IAnimalFactory";
import IAnimal from "./IAnimal";
import Duck from "./Duck";
import Cat from "./Cat";
import Dog from "./Dog";

class RandomAnimalFactory implements IAnimalFactory {
    createAnimal() : IAnimal {
        const animals = [
            new Duck(),
            new Cat(),
            new Dog()
        ]
        const randomAnimal = Math.floor(Math.random() * (animals.length - 1)) + 0
        return animals[randomAnimal]
    }
}

export default RandomAnimalFactory
