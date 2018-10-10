import ICommand from "./ICommand";
import Light from "./Light";

class LightOn implements ICommand {
    light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.on()
    }

    unexecute(): void {
        this.light.off()
    }
}

export default LightOn

