import { useState, useCallback, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

let nextId = 6;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Learn React Basics", completed: false },
    { id: 2, todo: "Practice Components", completed: false },
    { id: 3, todo: "Review JSX", completed: false },
    { id: 4, todo: "Install Node.js", completed: true },
    { id: 5, todo: "Create Vite Project", completed: true },
  ]);

  const addTodo = useCallback((text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setTodos((prev) => [
      ...prev,
      { id: nextId++, todo: trimmed, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTodo = useCallback((id, newText) => {
    const trimmed = newText.trim();
    if (!trimmed) return;

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, todo: trimmed } : t))
    );
  }, []);

  const pendingTodos = useMemo(
    () => todos.filter((t) => !t.completed),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((t) => t.completed),
    [todos]
  );

  return (
    <div className="container">
      <Header onAdd={addTodo} />

      <div className="lists-container">
        <TodoList
          title="Pending Todos"
          todos={pendingTodos}
          completed={false}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

        <TodoList
          title="Completed Todos"
          todos={completedTodos}
          completed={true}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;