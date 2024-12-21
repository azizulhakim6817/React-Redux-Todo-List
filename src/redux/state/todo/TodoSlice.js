import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },

  reducers: {
    AddTodo: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveTodo: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    EditTodo: (state, action) => {
      state.value.splice(action.payload["index"], 1, action.payload["task"]);
    },
  },
});

export default toDoSlice.reducer;
export const { AddTodo, RemoveTodo, EditTodo } = toDoSlice.actions;
