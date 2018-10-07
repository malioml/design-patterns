import IAlert from "./IAlert";

class AlertLinux implements IAlert {
    display(): void {
        console.log('displaying alert for linux')
    }
}

export default AlertLinux
