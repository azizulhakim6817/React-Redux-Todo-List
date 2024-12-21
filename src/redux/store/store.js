import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../state/counter/counterSlice";
import toDoReducer from "../state/todo/TodoSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: toDoReducer,
  },
});
