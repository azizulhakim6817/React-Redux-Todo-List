import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  setCustom,
  reset,
} from "../../redux/state/counter/counterSlice";
import toast from "react-hot-toast";

const Counter = () => {
  const myNumber = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleCustom = () => {
    const value = Number(myNumber.current.value);
    dispatch(setCustom(value));
    myNumber.current.value = "";

    if (value) {
      toast.success("Your counter has been successed");
    } else {
      toast.error("Please enter a valid number");
    }
  };
  return (
    <div className=" card shadow-lg">
      <div className=" card-header bg-secondary">
        <h4 className=" text-white text-center fw-bold">My Counter App</h4>
      </div>
      <div className=" card-body mx-auto text-center">
        <h1 className=" text-center mb-3">{count}</h1>
        <div className="p-3">
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success"
          >
            Increase
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn btn btn-warning mx-2"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
            className="btn btn-danger mx-2"
          >
            Delete All
          </button>
        </div>
        <div className=" m-4 text-center">
          <input ref={myNumber} className=" form-control w-100" type="number" />
          <button
            onClick={handleCustom}
            className=" btn w-100 btn-primary mt-2 fw-bold "
          >
            Set your number...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
