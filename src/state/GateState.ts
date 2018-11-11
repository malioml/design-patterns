interface GateState {
    enter(): void
    pay(): void
    payOk(): void
    payFailed(): void
}

export default GateState
