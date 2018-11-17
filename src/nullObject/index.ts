import NullSkipAd from "./NullSkipAd";
import Button from "./Button";
import SkipAd from "./SkipAd";

export default () => {
    console.log('------------ Start Null Object Pattern --------------')

    const beepTime = 1000
    const adPeriodTime = 5000
    let intervalTime = 0

    const button = new Button()

    const adInterval = setInterval(() => {

        if (intervalTime >= adPeriodTime) {
            const skipAd = new SkipAd(button)
            skipAd.execute()

            console.log('------------ End Null Object Pattern --------------')
            clearInterval(adInterval)
            return
        }

        const skipAd = new NullSkipAd(button)
        skipAd.execute()

        intervalTime += beepTime

    }, beepTime)
}
