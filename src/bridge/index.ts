import LongForm from "./LongForm";
import ArtistResource from "./ArtistResource";
import Artist from "./Artist";
import BookResource from "./BookResource";
import Book from "./Book";
import ShortForm from "./ShortForm";

export default () => {
    console.log('------------ Start Bridge Pattern --------------')

    const longFormWithArtist = new LongForm(new ArtistResource(new Artist()))
    console.log(longFormWithArtist.show())

    console.log('--------------------------')

    const longFormWithBook = new LongForm(new BookResource(new Book()))
    console.log(longFormWithBook.show())

    console.log('--------------------------')

    const shortFormWithArtist = new ShortForm(new ArtistResource(new Artist()))
    console.log(shortFormWithArtist.show())

    console.log('--------------------------')

    const shortFormWithBook = new ShortForm(new BookResource(new Book()))
    console.log(shortFormWithBook.show())


    console.log('------------ End Bridge Pattern --------------')
}
