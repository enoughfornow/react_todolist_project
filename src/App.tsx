import React from 'react';
import { Box } from '@mui/material';
import { Header, Panel, TodoList } from './components/';
import './App.css';

export type Todo = { id: number; name: string; description: string; checked: boolean };

function App() {
  const [editTodoId, setEditTodoId] = React.useState<number | null>(null);
  const [todoList, setTodoList] = React.useState([
    {
      id: 1,
      name: 'react & material/ui project',
      description: 'w/o redux/context',
      checked: false,
    },
  ]);

  const onEditTodo = (id: Todo['id']) => {
    setEditTodoId(id);
  };
  const onDeleteTodo = (id: Todo['id']) => {
    if (id === 1) {
      return todoList;
    }
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const onAddTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList([
      ...todoList,
      { id: todoList[todoList.length - 1].id + 1, description, name, checked: false },
    ]);
  };

  const onCheckTodo = (id: Todo['id']) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      }),
    );
  };
  const onChangeTodo = ({ name, description }: Omit<Todo, 'id' | 'checked'>) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === editTodoId) {
          return { ...todo, name, description };
        }
        return todo;
      }),
    );
    setEditTodoId(null);
  };

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width="500px">
        <Header todoCount={todoList.length} />
        <Panel onAddTodo={onAddTodo} />
        <TodoList
          editTodoId={editTodoId}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEditTodo={onEditTodo}
          onChangeTodo={onChangeTodo}
        />
      </Box>
    </div>
  );
}

export default App;
