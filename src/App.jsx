import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const pendingTodos = [
  { id: 1, todo: "Learn React Basics" },
  { id: 2, todo: "Practice Components" },
  { id: 3, todo: "Review JSX" },
];

const completedTodos = [
  { id: 4, todo: "Install Node.js" },
  { id: 5, todo: "Create Vite Project" },
];

function App() {
  return (
    <div className="container">
      <Header />

      <div className="lists-container">
        <TodoList
          title="Pending Todos"
          todos={pendingTodos}
          completed={false}
        />

        <TodoList
          title="Completed Todos"
          todos={completedTodos}
          completed={true}
        />
      </div>
    </div>
  );
}

export default App;