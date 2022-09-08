import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Home from "./Pages/home";
import Dashboard from "./Pages/dashboard";
import Task from "./Components/Task";
import Users from "./Components/Users";
import Reports from "./Components/Reports";
import AddLineMan from "./Components/AddLineMan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard/" element={<Dashboard />}>
          <Route path=":fname" element={<Dashboard />} />
          <Route path="tasks" element={<Task />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
          <Route path="addlineman" element={<AddLineMan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
