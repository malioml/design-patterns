import ICommand from "./ICommand";
import Light from "./Light";

class LightOff implements ICommand {
    light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.off()
    }

    unexecute(): void {
        this.light.on()
    }
}

export default LightOff
