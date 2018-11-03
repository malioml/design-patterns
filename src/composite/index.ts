import Project from "./Project";
import Todo from "./Todo";

export default () => {
    document.write('------------------------ Start Composite Pattern --------------------------')

    const MondayTodoList = new Project(
        'Monday Todo List',
        [
            new Todo('wake up early and exercise'),
            new Project('eat a healthy breakfast', [
                new Todo('drink orange juice'),
                new Todo('eat ham'),
                new Todo('do not eat cheese')
            ]),
            new Todo('arrive early')
        ]
    )

    const TuesdayTodoList = new Project(
        'Tuesday Todo List',
        [
            new Todo('clear their desk and desktop'),
            new Todo('carve out time for unexpected projects and tasks'),
            new Todo('greet their team and boss')
        ]
    )

    const WednesdayTodoList = new Project(
        'Wednesday Todo List',
        [
            new Todo('update to-do list and goals'),
            new Todo('visualize the week’s successes'),
            new Todo('screen emails for urgent requests')
        ]
    )

    const ThursdayTodoList = new Project(
        'Thursday Todo List',
        [
            new Todo('ackle the tough challenges first'),
            new Todo('make an extra effort to smile'),
            new Todo('add a “blanket of humanity” to their emails')
        ]
    )

    const FridayTodoList = new Project(
        'Friday Todo List',
        [
            new Todo('able to say no'),
            new Todo('stay focused')
        ]
    )

    const weekTodoList = [MondayTodoList, TuesdayTodoList, WednesdayTodoList, ThursdayTodoList, FridayTodoList]
    const todoList = new Project('Emilio todo list', weekTodoList)
    document.write(todoList.getHtml())

    document.write('------------------------ End Composite Pattern --------------------------')
}

