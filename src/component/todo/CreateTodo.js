import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../../redux/state/todo/TodoSlice";
import toast from "react-hot-toast";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskInput = useRef();

  const handleBtn = () => {
    const taskBtn = dispatch(AddTodo(taskInput.current.value));
    taskInput.current.value = "";
    if (!taskBtn) {
      toast.error("Task name cannot be empty");
    } else {
      toast.success("Task added successfully");
    }
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-10">
          <label className=" fw-bold" htmlFor="taskName">
            Task Name:
          </label>
          <input
            id="taskName"
            type="text"
            className="form-control"
            placeholder="Enter your task name"
            ref={taskInput}
          />
        </div>
        <div className="col-md-10 my-2">
          <button onClick={handleBtn} className="btn btn-primary w-100 my-1  ">
            Add Todo
          </button>
        </div>
        <div className="col-md-2 m-0 p-0"></div>
      </div>
    </div>
  );
};

export default CreateTodo;
