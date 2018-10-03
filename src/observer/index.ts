import WeatherStation from "./observables/WeatherStation";
import Television from "./observers/Television";
import Phone from "./observers/Phone";

export default () => {
    console.log('------------ Start Observer Pattern --------------')
    const weatherStation = new WeatherStation()
    const television = new Television(weatherStation, 'TV')
    weatherStation.add(television)
    const phone = new Phone(weatherStation, 'Phone')
    weatherStation.add(phone)
    weatherStation.setTemperature(25)
    weatherStation.setTemperature(30)
    weatherStation.remove(phone)
    weatherStation.setTemperature(35)
    console.log('------------ End Observer Pattern --------------')
}


