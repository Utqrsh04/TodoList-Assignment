import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const LandingPage = () => {
  const [todos, setTodos] = useState(deafultData);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    console.log(todo);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(...todos);
  };

  const removeTodo = (id) => {
    const filterdTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(filterdTodo);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const markAsCompleted = (id) => {
    console.log(todos);
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="landingPage-container">
      <header className="header-container">TodoApp 📒</header>
      <div className="hero-section-container">
        <h1>What's the Plan for Today ❔</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={markAsCompleted}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default LandingPage;

const deafultData = [
  {
    id: 1,
    text: "Use the Edit & Delete icons to Edit and Delete todos.",
  },
  {
    id: 2,
    text: "Click on the todo to mark it as compelte",
  },
];
