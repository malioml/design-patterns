import IButton from "./IButton";

class ButtonLinux implements IButton {
    display(): void {
        console.log('displaying button for linux')
    }
}

export default ButtonLinux
