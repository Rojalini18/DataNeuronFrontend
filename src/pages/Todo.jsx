import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../utils/api.js";
import "../App.css";

const CreateTask = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [updatedTodosCount, setUpdatedTodosCount] = useState(0);
  const [createdTodosCount, setCreatedTodosCount] = useState(0);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      setTasks(res.data);
    });

    axios.get(`${baseURL}/updatedTodosCount`).then((res) => {
      setUpdatedTodosCount(res.data.count);
    });

    axios.get(`${baseURL}/createdTodosCount`).then((res) => {
      setCreatedTodosCount(res.data.count);
    });
  }, [updateUI]);

  const addTask = () => {
    if (input.trim() === "") {
      window.alert("Please write something to craete a task.");
      return;
    }

    axios.post(`${baseURL}/save`, { task: input }).then((res) => {
      setInput("");
      setUpdateUI((prevState) => !prevState);
      window.alert("Task created successfully!");
    });
  };

  const updateMode = (id, text) => {
    setInput(text);
    setUpdateId(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
      setUpdateUI((prevState) => !prevState);
      setUpdateId(null);
      setInput("");
      window.alert("Task updated successfully!");
    });
  };

  const removeTask = (id) => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      setUpdateUI((prevState) => !prevState);
      window.alert("Task deleted successfully!");
    });
  };

  return (
    <main className="container">
      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button type="submit" onClick={updateId ? updateTask : addTask}>
          {updateId ? "Update Task" : "Add Task"}
        </button>
      </div>
      <div>
        <h3>Created Todos Count: {createdTodosCount}</h3>
        <h3>Updated Todos Count: {updatedTodosCount}</h3>
      </div>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.task}</td>
              <td>
                <button onClick={() => updateMode(task._id, task.task)}>
                  Edit
                </button>
                <span className="button-spacing"></span>
                <button onClick={() => removeTask(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default CreateTask;
