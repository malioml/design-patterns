import Duck from './strategy/Duck'
import CityDuck from "./strategy/display/CityDuck";
import SimpleFly from "./strategy/fly/SimpleFly";
import SimpleQuack from "./strategy/quack/SimpleQuack";
import NoQuack from "./strategy/quack/NoQuack";
import JetFly from "./strategy/fly/JetFly";
import CountryDuck from "./strategy/display/CountryDuck";

//strategy
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
