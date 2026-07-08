import { useState } from "react";
import TaskCard from "./components/TaskCard";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Mülakata hazırlan", completed: false },
    { id: 2, title: "Proje kurulumu", completed: true },
    { id: 3, title: "Git öğren", completed: true },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        const apiTasks = response.data.map((item) => ({
          id: item.id,
          title: item.title,
          completed: item.completed,
        }));
        setTasks(apiTasks);
        setLoading(false);
      })
      .catch((err) => {
        setError("Görevler yüklenirken bir hata oluştu");
        setLoading(false);
      });
  }, []);

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
      {loading && <p>Görevler yükleniyor...</p>}

      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              completed={task.completed}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
