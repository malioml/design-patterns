import ICommand from "./ICommand";
import Button from "./Button";

class NullSkipAd implements ICommand {

    button: Button

    constructor(button: Button) {
        this.button = button
    }

    execute(): void {
        console.log(`execute command null to don't do anything`)
    }

}

export default NullSkipAd
