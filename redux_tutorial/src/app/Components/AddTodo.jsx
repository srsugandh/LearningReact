import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
function AddTodo(){

    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(
            addTodo(input)
        )
    }
    return (
      <form onSubmit={addTodoHandler}>
        <input type="text" placeholder="Add Todo" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
        <button type="submit">Add</button>
      </form>
    )

}
export default AddTodo;