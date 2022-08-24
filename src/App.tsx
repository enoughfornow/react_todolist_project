import React from 'react';
import { Box } from '@mui/material';
import { Header, Panel, TodoList } from './components/';
import './App.css';

export type Todo = { id: number; name: string; description: string; checked: boolean };

function App() {
  const [todoList, setTodoList] = React.useState([
    { id: 1, name: 'task 1', description: 'test', checked: false },
    { id: 2, name: 'task 2', description: 'test222', checked: false },
    { id: 3, name: 'task 3', description: 'test3333333333333333333', checked: false },
  ]);
  return (
    <div className="App">
      <Box display="flex" flexDirection="column" width="500px">
        <Header />
        <Panel />
        <TodoList todoList={todoList} />
      </Box>
    </div>
  );
}

export default App;
