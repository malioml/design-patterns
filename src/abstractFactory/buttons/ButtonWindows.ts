import IButton from "./IButton";

class ButtonWindows implements IButton {
    display(): void {
        console.log('displaying button for windows')
    }
}

export default ButtonWindows
