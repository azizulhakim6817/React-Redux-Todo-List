import React from "react";
import { useSelector } from "react-redux";
import { TodoEditAlert } from "./EditTodoAlert";
import { TodoDeleteAlert } from "./DeleteTodoAlert";

const ListTodo = () => {
  const todoItems = useSelector((state) => state.todo.value);

  return (
    <div className="container ">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Your Todo List</h5>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table  table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Task Name</th>
                  <th scope="col" className="text-center">
                    Edit
                  </th>
                  <th scope="col" className="text-center">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {todoItems.map((item, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item}</td>
                    <td className="text-center">
                      <button
                        onClick={() => TodoEditAlert(i, item)}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => TodoDeleteAlert(i)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
