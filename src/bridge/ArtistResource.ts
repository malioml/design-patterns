import IResource from "./IResource";
import Artist from "./Artist";

class ArtistResource implements IResource {
    artist: Artist

    constructor(artist: Artist) {
        this.artist = artist
    }

    image(): string {
        return this.artist.image()
    }

    snippet(): string {
        return this.artist.bio()
    }

    title(): string {
        return `${this.artist.fName()}  ${this.artist.lName()}`
    }

    url(): string {
        return this.artist.website()
    }
}

export default ArtistResource
