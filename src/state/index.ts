import Gate from "./Gate";

export default () => {
    console.log('------------ Start State Pattern --------------')

    const gate = new Gate()
    gate.enter()
    gate.pay()
    gate.payFailed()
    gate.pay()
    gate.payOk()
    gate.enter()
    gate.pay()
    gate.enter()

    console.log('------------ End State Pattern --------------')
}
