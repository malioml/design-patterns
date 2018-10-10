import Invoker from "./Invoker";
import Light from "./Light";
import LightOff from "./LightOff";
import LightOn from "./LightOn";

export default () => {
    console.log('------------ Start Command Pattern --------------')

    const light = new Light()
    const invoker = new Invoker(new LightOn(light), new LightOff(light))
    invoker.clickOn()
    invoker.clickOff()

    console.log('------------ End Command Pattern --------------')
}
