import UiWindowsFactory from "./UiWindowsFactory";
import UiLinuxFactory from "./UiLinuxFactory";
import UiMacFactory from "./UiMacFactory";

export default () => {
    console.log('------------ Start Abstract Factory Pattern --------------')

    const buttonWindows = new UiWindowsFactory().getButton()
    buttonWindows.display()
    const alertWindows = new UiWindowsFactory().getAlert()
    alertWindows.display()

    const buttonLinux = new UiLinuxFactory().getButton()
    buttonLinux.display()
    const alertLinux= new UiLinuxFactory().getAlert()
    alertLinux.display()

    const buttonMac = new UiMacFactory().getButton()
    buttonMac.display()
    const alertMac = new UiMacFactory().getAlert()
    alertMac.display()

    console.log('------------ End Abstract Factory Pattern --------------')
}
