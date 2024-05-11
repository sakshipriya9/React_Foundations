function TodoList({todos}) {
    return <ul> {todos.map ((todo, index) => <li> {todo} </li>)} </ul>
}

export default TodoList;