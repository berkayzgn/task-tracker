import TaskCard from "./components/TaskCard";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>Görev Takip</h1>
      <div className="task-list">
        <TaskCard title="Mülakata hazırlan" completed={false} />
        <TaskCard title="Proje kurulumu" completed={true} />
        <TaskCard title="Git öğren" completed={true} />
        <TaskCard title="Rest API'yi öğren" completed={false} />
      </div>
    </main>
  );
}

export default App;
