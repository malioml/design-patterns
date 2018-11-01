import LazyBookParserProxy from './LazyBookParserProxy'

export default () => {
    console.log('------------ Start Proxy Pattern --------------')
		
		const book = 'very long string...'
		const lazyBookParserProxy = new LazyBookParserProxy(book)
		console.log(`book has: ${lazyBookParserProxy.getNumberLetters()} lines`)
		
    console.log('------------ End Proxy Pattern --------------')
}
