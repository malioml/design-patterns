import Singleton from "./Singleton";

export default () => {
    console.log('------------ Start Singleton Pattern --------------')

    const singleton = Singleton.getInstance()
    const retrieveSingletonFirstCall = Singleton.getInstance()
    const retrieveSingletonSecondCall = Singleton.getInstance()

    if (singleton === retrieveSingletonFirstCall && singleton === retrieveSingletonSecondCall) {
        console.log('singleton === retrieveSingletonFirstCall === retrieveSingletonSecondCall are the same object')
    }

    console.log('------------ End Singleton Pattern --------------')
}
