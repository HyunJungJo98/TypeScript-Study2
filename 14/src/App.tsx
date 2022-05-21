import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';
import { Route } from 'react-router-dom';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  //[{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    // ...todos는 항상 최신 상태가 아닐 수도 있음
    //setTodos([...todos, {id:Math.random().toString(), text:text}])
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
