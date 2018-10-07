import IUi from "./IUi";
import IAlert from "./alerts/IAlert";
import IButton from "./buttons/IButton";
import AlertMac from "./alerts/AlertMac";
import ButtonMac from "./buttons/ButtonMac";

class UiMacFactory implements IUi {
    getAlert(): IAlert {
        return new AlertMac()
    }

    getButton(): IButton {
        return new ButtonMac();
    }

}

export default UiMacFactory
