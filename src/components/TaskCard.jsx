import "./TaskCard.css";

function TaskCard({ title, completed }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <span className={completed ? "badge done" : "badge pending"}>
        {completed ? "Tamamlandı" : "Bekliyor"}
      </span>
    </div>
  );
}

export default TaskCard;
