import Record from "./Record";

class Post extends Record {
    text: string

    beforeSave(): void {
        console.log('before save post')
    }

    afterSave(): void {
        console.log('afterSave save post')
    }

    setText(text: string): void {
        this.text = text
    }
}

export default Post
