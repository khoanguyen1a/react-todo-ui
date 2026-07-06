function TodoItem({ todo, completed }) {
  return (
    <li className="todo-item">
      <span className="todo-text">
        {todo.todo}
      </span>

      <button className="toggle-btn">
        {completed ? "←" : "→"}
      </button>

      <button className="edit-btn">
        Edit
      </button>

      <button className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;