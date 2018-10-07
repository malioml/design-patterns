import IAlert from "./IAlert";

class AlertMac implements IAlert {
    display(): void {
        console.log('displaying alert for mac')
    }
}

export default AlertMac
