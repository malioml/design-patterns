import RandomAnimalFactory from "./RandomAnimalFactory";
import IAnimal from "./IAnimal";
import BalancedAnimalFactory from "./BalancedAnimalFactory";

export default () => {
    console.log('------------ Start Factory Method Pattern --------------')

    const animalsAlreadyCreated: Array<IAnimal> = []

    console.log('creating random animals...')
    for (let i = 0; i < 10; i++) {
        const animal = new RandomAnimalFactory().createAnimal()
        animal.display()
        animalsAlreadyCreated.push(animal)
    }
    console.log('end creating random animals...')

    console.log('creating balanced animals...')
    for (let i = 0; i < 10; i++) {
        const animal = new BalancedAnimalFactory(animalsAlreadyCreated).createAnimal()
        animal.display()
        animalsAlreadyCreated.push(animal)
    }
    console.log('end creating balanced animals...')

    console.log('------------ End Factory Method Pattern --------------')
}
