import GateState from "./GateState";
import Gate from "./Gate";
import CloseGateState from "./CloseGateState";
import OpenGateState from "./OpenGateState";

class ProcessingGateState implements GateState {
    gate: Gate

    constructor(gate: Gate) {
        console.log('-- processing state --')
        this.gate = gate
    }

    enter(): void {
        console.log('enter in processing state')
        this.gate.changeState(new ProcessingGateState(this.gate))
    }

    pay(): void {
        console.log('pay in processing state')
        this.gate.changeState(new ProcessingGateState(this.gate))
    }

    payFailed(): void {
        console.log('pay failed in processing state')
        this.gate.changeState(new CloseGateState(this.gate))
    }

    payOk(): void {
        console.log('pay ok in processing state')
        this.gate.changeState(new OpenGateState(this.gate))
    }
}

export default ProcessingGateState
