import React from "react";
import CreateTodo from "../CreateTodo";
import ListTodo from "../ListTodo";
import "../../../assets/css/todo.css";

const TodoDashboard = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-12 col-md-4  rounded shadow-lg">
          <CreateTodo />
        </div>
        <div className="col-12 col-md-8 mt-0">
          <ListTodo />
        </div>
      </div>
    </div>
  );
};

export default TodoDashboard;
