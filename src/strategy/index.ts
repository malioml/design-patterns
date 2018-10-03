import Duck from "./Duck";
import CityDuck from "./display/CityDuck";
import SimpleFly from "./fly/SimpleFly";
import SimpleQuack from "./quack/SimpleQuack";
import CountryDuck from "./display/CountryDuck";
import JetFly from "./fly/JetFly";
import NoQuack from "./quack/NoQuack";

export default () => {
    console.log('------------ Start Strategy Pattern --------------')
    const duck1 = new Duck(new CityDuck(), new SimpleFly(), new SimpleQuack())
    duck1.flyBehaviour.fly()
    duck1.quackBehaviour.quack()
    duck1.displayBehaviour.display()

    const duck2 = new Duck(new CountryDuck(), new JetFly(), new NoQuack())
    duck2.flyBehaviour.fly()
    duck2.quackBehaviour.quack()
    duck2.displayBehaviour.display()

    const duck3 = new Duck(new CountryDuck(), new SimpleFly(), new NoQuack())
    duck3.flyBehaviour.fly()
    duck3.quackBehaviour.quack()
    duck3.displayBehaviour.display()
    console.log('------------ End Strategy Pattern --------------')
}


