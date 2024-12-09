import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"Learn React",completed:true},{id:2,text:"Learn Redux",completed:true},{id:3,text:"Learn Redux Toolkit",completed:false}]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers: {
        addTodo: (state,action)=> {
            state.todos.push({id:nanoid(),text:action.payload,completed:false})
        },
        removeTodo: (state,action)=> {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
            state.todos
        },
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;