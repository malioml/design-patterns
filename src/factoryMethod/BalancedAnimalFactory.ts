import IAnimalFactory from "./IAnimalFactory";
import IAnimal from "./IAnimal";
import Duck from "./Duck";
import Dog from "./Dog";
import Cat from "./Cat";

class BalancedAnimalFactory implements IAnimalFactory {
    animalsAlreadyCreated: Array<IAnimal>

    constructor(animalsAlreadyCreated: Array<IAnimal>) {
        this.animalsAlreadyCreated = animalsAlreadyCreated
    }

    getNumberTypeAnimalsCreated(): any {
        const animalsTypes = {cats: 0, dogs: 0, ducks: 0}
        return this.animalsAlreadyCreated.reduce((prev: any, next: any) => {
            prev[next.getType()]++
            return prev
        }, animalsTypes)
    }

    createAnimal(): IAnimal {
        const animalsTypes = this.getNumberTypeAnimalsCreated()
        console.log(`actual animal scenario: `, animalsTypes)
        const animals = Object.keys(animalsTypes)
        const selectedAnimal = animals.reduce((prev: any, next: any) => {
            return (animalsTypes[prev] > animalsTypes[next]) ? next : prev
        })
        switch(selectedAnimal) {
            case 'dogs': return new Dog()
            case 'cats': return new Cat()
            default: return new Duck()
        }

    }
}

export default BalancedAnimalFactory
