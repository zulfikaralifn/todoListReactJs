import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <h1 style={{ backgroundColor: "purple", color: "white", marginBottom: "80px" }}>SIMPLE TODOLIST APPLICATION</h1>
        <input style={{ padding: "10px", marginRight: "10px" }} onChange={handleChange} />
        <button style={{ padding: "10px" }} onClick={addTask}>
          Tambahkan Tugas
        </button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
