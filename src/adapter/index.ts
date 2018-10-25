import Adapter from './Adapter'
import Adaptee from './Adaptee'

export default () => {
	    console.log('------------ Start Adapter Pattern --------------')
			const target = new Adapter(new Adaptee())
			target.request()
			console.log('------------ End Adapter Pattern --------------')
} 