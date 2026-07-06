import TodoItem from "./TodoItem";

function TodoList({ title, todos, completed }) {
  return (
    <div className="todo-column">
      <h2>{title}</h2>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            completed={completed}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;