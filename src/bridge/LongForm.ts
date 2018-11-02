import View from "./View";

class LongForm extends View {
    show(): string {
        return `${this.resource.title()}\n${this.resource.image()}\n${this.resource.snippet()}\n${this.resource.url()}`
    }
}

export default LongForm
