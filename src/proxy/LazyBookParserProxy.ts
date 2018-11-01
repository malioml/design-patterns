import IBookParser from './IBookParser'
import BookParser from './BookParser'

class LazyBookParserProxy implements IBookParser {
	private parser: BookParser 
	private book: string
	
	constructor(book: string) {
		this.book = book
	}
	
	getNumberLetters(): number {
		if (!this.parser) {
			this.parser = new BookParser(this.book)
		}
		return this.parser.getNumberLetters()
	}
}

export default LazyBookParserProxy