import IBookParser from './IBookParser'

class BookParser implements IBookParser {
	private numberLetters: number
	
	constructor(book: string) {
		console.log('expensive parsing calculating number of letters...')
		this.numberLetters = book.length
	}
	
	getNumberLetters(): number {
		return this.numberLetters
	}
	
}

export default BookParser