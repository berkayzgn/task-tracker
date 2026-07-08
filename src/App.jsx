import { useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Mülakata hazırlan", completed: false },
    { id: 2, title: "Proje kurulumu", completed: true },
    { id: 3, title: "Git öğren", completed: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  function handleAddTask() {
    if (newTaskTitle.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  return (
    <main className="app">
      <h1>Görev Takip</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Yeni görev yaz..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Ekle</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
