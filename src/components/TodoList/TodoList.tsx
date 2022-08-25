import { Box } from '@mui/material';
import React from 'react';
import type { Todo } from '../../App';
import { EditTodoItem } from './EditTodoItem/EditTodoItem';
import { TodoItem } from './TodoItem/TodoItem';

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
  onEditTodo: (id: Todo['id']) => void;
  editTodoId: Todo['id'] | null;
  onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onDeleteTodo,
  onCheckTodo,
  onEditTodo,
  editTodoId,
  onChangeTodo,
}) => {
  return (
    <Box>
      {todoList.map((todo) => {
        if (todo.id === editTodoId)
          return <EditTodoItem todo={todo} key={todo.id} onChangeTodo={onChangeTodo} />;
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onCheckTodo={onCheckTodo}
            onEditTodo={onEditTodo}
          />
        );
      })}
    </Box>
  );
};
