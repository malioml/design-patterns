import Book from "./Book";
import CaseReverseFacade from "./CaseReverseFacade";

export default () => {
    console.log('------------ Start Facade Pattern --------------')

    const book = new Book('Design Patterns')
    console.log(`title book: ${book.getTitle()}`)

    const bookTitleReversed = CaseReverseFacade.reverseStringCase(book.getTitle())
    console.log(`reverse title book: ${bookTitleReversed}`)

    console.log('------------ End Facade Pattern --------------')
}
