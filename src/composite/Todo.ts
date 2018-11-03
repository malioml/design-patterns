import TodoList from "./TodoList";

class Todo implements TodoList {
    text: string

    constructor(text: string) {
        this.text = text
    }

    getHtml(): string {
        return this.text;
    }

}

export default Todo
