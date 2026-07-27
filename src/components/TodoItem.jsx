import { useState, memo } from "react";

function TodoItem({ todo, completed, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.todo);

  const handleEditClick = () => {
    if (isEditing) {
      onEdit(todo.id, text);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEdit(todo.id, text);
      setIsEditing(false);
    }
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.todo}</span>
      )}

      <button className="toggle-btn" onClick={() => onToggle(todo.id)}>
        {completed ? "←" : "→"}
      </button>

      <button className="edit-btn" onClick={handleEditClick}>
        {isEditing ? "Save" : "Edit"}
      </button>

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}


export default memo(TodoItem);