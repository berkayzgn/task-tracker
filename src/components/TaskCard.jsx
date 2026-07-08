import "./TaskCard.css";

function TaskCard({ title, completed, onDelete }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <div className="task-card-right">
        <span className={completed ? "badge done" : "badge pending"}>
          {completed ? "Tamamlandı" : "Bekliyor"}
        </span>
        <button className="delete-btn" onClick={onDelete}>
          Sil
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
