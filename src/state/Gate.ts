import GateState from "./GateState";
import CloseGateState from "./CloseGateState";

class Gate {
    state: GateState

    constructor() {
        this.state = new CloseGateState(this)
    }

    enter(): void  {
        this.state.enter()
    }

    pay(): void  {
        this.state.pay()
    }

    payOk(): void  {
        this.state.payOk()
    }

    payFailed(): void  {
        this.state.payFailed()
    }

    changeState(state: GateState): void {
        this.state = state
    }
}

export default Gate
