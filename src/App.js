import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import TodoDashboardPage from "./component/todo/todoDashboard/TodoDashboardPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterPage />} />

          <Route path="/TodoDashboardPage" element={<TodoDashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
