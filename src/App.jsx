import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage";
import Todo from "./Components/Todo";
import Navbar from "./Components/Navbar";
import Info from "./Info";
import "./style.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
