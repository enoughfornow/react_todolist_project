import { Box } from '@mui/material';
import React from 'react';
import type { Todo } from '../../App';
import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todoList: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <Box>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Box>
  );
};
