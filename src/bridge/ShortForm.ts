import View from "./View";

class ShortForm extends View {
    show(): string {
        return `${this.resource.title()}\n${this.resource.url()}`
    }
}

export default ShortForm
