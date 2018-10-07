import IUi from "./IUi";
import IAlert from "./alerts/IAlert";
import IButton from "./buttons/IButton";
import AlertLinux from "./alerts/AlertLinux";
import ButtonLinux from "./buttons/ButtonLinux";

class UiLinuxFactory implements IUi {
    getAlert(): IAlert {
        return new AlertLinux()
    }

    getButton(): IButton {
        return new ButtonLinux();
    }

}

export default UiLinuxFactory
