import IDisplayBehaviour from "./IDisplayBehaviour";

class CountryDuck implements IDisplayBehaviour {
    display() {
        console.log('country duck!')
    }
}

export default CountryDuck
