import TodoList from "./TodoList";

class Project implements TodoList {
    title: string
    todoList: TodoList[]

    constructor(title:string, todoList: TodoList[]) {
        this.title = title
        this.todoList = todoList
    }

    getHtml(): string {
        const title = `<p>${this.title}</p>`
        const project = this.todoList.reduce((previous, current)=> {
            return `${previous}<ul><li>${current.getHtml()}</li></ul>`
        }, '')

        return `${title}${project}`
    }
}

export default Project
