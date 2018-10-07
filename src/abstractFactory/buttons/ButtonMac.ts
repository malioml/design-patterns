import IButton from "./IButton";

class ButtonMac implements IButton {
    display(): void {
        console.log('displaying button for mac')
    }
}

export default ButtonMac
