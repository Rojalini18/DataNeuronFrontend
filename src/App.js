import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResizableLayout from "./pages/ResizableLayout";
import CreateTask from "./pages/Todo";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ResizableLayout />}></Route>
          <Route path="/todo" element={<CreateTask />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
