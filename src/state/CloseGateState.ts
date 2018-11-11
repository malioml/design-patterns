import GateState from "./GateState";
import Gate from "./Gate";
import OpenGateState from "./OpenGateState";
import ProcessingGateState from "./ProcessingGateState";

class CloseGateState implements GateState {
    gate: Gate

    constructor(gate: Gate) {
        console.log('-- close state --')
        this.gate = gate
    }

    enter(): void {
        console.log('enter in close state')
        this.gate.changeState(new CloseGateState(this.gate))
    }

    pay(): void {
        console.log('pay in close state')
        this.gate.changeState(new ProcessingGateState(this.gate))
    }

    payFailed(): void {
        console.log('pay failed in close state')
        this.gate.changeState(new CloseGateState(this.gate))
    }

    payOk(): void {
        console.log('pay ok in close state')
        this.gate.changeState(new OpenGateState(this.gate))
    }
}

export default CloseGateState
