function Header() {
  return (
    <>
      <h1>Todo List</h1>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a new todo..."
        />

        <button>Submit</button>
      </div>
    </>
  );
}

export default Header;