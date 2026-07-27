import { useState, memo } from "react";

function Header({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onAdd(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <h1>Todo List</h1>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter a new todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}


export default memo(Header);