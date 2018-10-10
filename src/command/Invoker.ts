import LightOff from "./LightOff";
import LightOn from "./LightOn";

class Invoker {
    lightOn: LightOn
    lightOff: LightOff

    constructor(lightOn:LightOn, lightOff: LightOff) {
        this.lightOn = lightOn
        this.lightOff = lightOff
    }

    clickOn(): void {
        this.lightOn.execute()
    }

    clickOff(): void {
        this.lightOff.execute()
    }
}

export default Invoker
