import IAlert from "./IAlert";

class AlertWindows implements IAlert {
    display(): void {
        console.log('displaying alert for windows')
    }
}

export default AlertWindows
