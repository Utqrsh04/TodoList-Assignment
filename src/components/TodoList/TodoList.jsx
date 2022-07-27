import { useEffect, useState } from "react";

const TodoList = (props) => {
  const [todos, setTodos] = useState(props.data);

  useEffect(() => {
    console.log("Rendered todos");
  }, [props.data]);

  return (
    <div className="">
      This is TodoList
      {todos && todos.map((e) => <p>{e}</p>)}
    </div>
  );
};

export default TodoList;
