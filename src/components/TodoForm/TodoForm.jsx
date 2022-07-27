import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <div className="update-todos">
          <input
            placeholder="Update your item ✍"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </div>
      ) : (
        <div className="add-todos">
          <input
            placeholder="Add a todo ✍"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="text"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
