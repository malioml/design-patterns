import ICommand from "./ICommand";
import Button from "./Button";

class SkipAd implements ICommand {

    button: Button

    constructor(button: Button) {
        this.button = button
    }

    execute(): void {
        console.log(`execute command button click to skip ad`)
        this.button.click()
    }
}

export default SkipAd
