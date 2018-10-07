import IButton from "./buttons/IButton";
import IAlert from "./alerts/IAlert";

interface IUi {
    getButton(): IButton
    getAlert(): IAlert
}

export default IUi
