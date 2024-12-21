import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-center" />
    </Provider>
  </React.StrictMode>
);
