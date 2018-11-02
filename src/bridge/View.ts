import IResource from "./IResource";

abstract class View {
    resource: IResource

    constructor(resource: IResource) {
        this.resource = resource
    }

    abstract show(): string
}

export default View
