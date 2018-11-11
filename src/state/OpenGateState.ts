import GateState from "./GateState";
import Gate from "./Gate";
import CloseGateState from "./CloseGateState";

class OpenGateState implements GateState {
    gate: Gate

    constructor(gate: Gate) {
        console.log('-- open state --')
        this.gate = gate
    }

    enter(): void {
        console.log('enter in open state')
        this.gate.changeState(new CloseGateState(this.gate))
    }

    pay(): void {
        console.log('pay in open state')
        this.gate.changeState(new OpenGateState(this.gate))
    }

    payFailed(): void {
        console.log('pay failed in open state')
        this.gate.changeState(new OpenGateState(this.gate))
    }

    payOk(): void {
        console.log('pay ok in open state')
        this.gate.changeState(new OpenGateState(this.gate))
    }
}

export default OpenGateState
