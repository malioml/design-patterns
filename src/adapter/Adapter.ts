import Itarget from './Itarget'
import Adaptee from './Adaptee'

class Adapter implements Itarget {
	adaptee: Adaptee
	
	constructor(adaptee: Adaptee) {
		this.adaptee = adaptee
	}
	
	request() : void{
		console.log('if we use other plugin in the future, we have to change this specific call: this.adaptee.blablabla')
		console.log('instead of change core call')
		this.adaptee.specificRequest()	
	} 
}

export default Adapter