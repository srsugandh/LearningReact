import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../features/todo/todoSlice";

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            Todos
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Todos;