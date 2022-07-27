import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row completed" : "todo-row"}
      key={index}
    >
      <div
        className="todo-text"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className="icons">
        <span onClick={() => removeTodo(todo.id)} className="delete-icon">
          <img
            alt="delete-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAo0lEQVRIieWTTQqDMBCFP6xb7yg9Qo/SHik3qUgXFlxWqGI3WYQ4Jc5I0NIHswnM+5lH4F9wAXpg9tP7NzVcQGIdFxIWFhcJzBk4D4Yb9vtfYzKpg2aDucWuJHDPLbAlwcJc9gQSTsAbfcEjUMZkUoIJeKi9Q+tFkgJg60Hc+SZg6UHc2S3BIQVUJ7J0oDJVAQPr/8DL76hwBp4ryDug1pL/Dj5MW2BhteGWuAAAAABJRU5ErkJggg=="
          />
        </span>
        <span
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        >
          <img
            alt="edit-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAuklEQVRIie3VoQrCQAAG4A+x+xJisxnMghisRl9iyahN38Jq8Wl8AItVMVk16GAOhxN2N4T9cOF2cN/9HOxo8udJcMEBg1joCvfMuGIYG83ib81boU/ySgfb0EhR63MIaFUCT6pG0403ubVFZm0ZCk3Hp+b5b5WjRc2joMHwMmiUO23QBv05E8/39Bta6c8hzbwOFMZ1oNCLifZzG3cxwgy3UCisFbeahkLhKNI9tnPz0wvdYR8SbhItDwJbnBVPxJOqAAAAAElFTkSuQmCC"
          />
        </span>
      </div>
    </div>
  ));
};

export default Todo;
