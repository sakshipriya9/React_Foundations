import { useState } from "react";
import TodoList from "./TodoList";
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    return (
        <div className="center">
           <input className="big" type="text" placeholder="Write your todo here..." onChange={(event) => setNewTodo(event.target.value)}/>
        <br />

        <button className="btn" onClick={() => setTodos([...todos, newTodo])}> Add Todo </button>
        <TodoList todos={todos} />
        </div>
    );
}

export default Todo;