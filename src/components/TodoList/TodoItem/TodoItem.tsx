import React from 'react';
import { Stack, Box, IconButton, Paper, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import type { Todo } from '../../../App';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: Todo['id']) => void;
  onCheckTodo: (id: Todo['id']) => void;
  onEditTodo: (id: Todo['id']) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDeleteTodo,
  onCheckTodo,
  onEditTodo,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        marginTop: '15px',
        width: '100%',
        padding: '20px 28px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 1,
        opacity: todo.checked ? 0.5 : 1,
      }}>
      <Box textAlign="left">
        <Typography
          onClick={() => onCheckTodo(todo.id)}
          sx={{ cursor: 'pointer', textDecorationLine: todo.checked ? 'line-through' : 'none' }}
          variant="h5"
          component="h4"
          gutterBottom>
          {todo.name}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {todo.description}
        </Typography>
      </Box>

      <Box>
        <IconButton onClick={() => onEditTodo(todo.id)} color="success" area-label="edit">
          <Edit />
        </IconButton>
        <IconButton onClick={() => onDeleteTodo(todo.id)} color="error" area-label="delete">
          <Delete />
        </IconButton>
      </Box>
    </Paper>
  );
};
