import IUi from "./IUi";
import AlertWindows from "./alerts/AlertWindows";
import IAlert from "./alerts/IAlert";
import IButton from "./buttons/IButton";
import ButtonWindows from "./buttons/ButtonWindows";

class UiWindowsFactory implements IUi {
    getAlert(): IAlert {
        return new AlertWindows()
    }

    getButton(): IButton {
        return new ButtonWindows();
    }

}

export default UiWindowsFactory
