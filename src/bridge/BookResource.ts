import IResource from "./IResource";
import Book from "./Book";

class BookResource implements IResource {
    book: Book

    constructor(book: Book) {
        this.book = book
    }

    image(): string {
        return this.book.image()
    }

    snippet(): string {
        return this.book.report();
    }

    title(): string {
        return this.book.author();
    }

    url(): string {
        return this.book.website();
    }
}

export default BookResource
