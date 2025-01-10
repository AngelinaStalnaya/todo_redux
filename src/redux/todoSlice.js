import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 64654161, title: 'todo_1', completed: false},
    {id: 64631644, title: 'todo_2', completed: false},
]

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false,
            };

            state.push(todo);
        },
        toggleCompleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        }
    },
});

export const {addTodo, toggleCompleteTodo} = todoSlice.actions;
export default todoSlice.reducer;