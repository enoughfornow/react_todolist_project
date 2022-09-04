import React from 'react';
import { Paper, TextField, Button } from '@mui/material';
import { Edit } from '@mui/icons-material';
import type { Todo } from '../../../App';

interface EditTodoItemProps {
  todo: Todo;

  onChangeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
  const [editTodo, setEditTodo] = React.useState({
    name: todo.name,
    description: todo.description,
  });

  const onClick = () => {
    if (todo.name !== '' && todo.description !== '') {
      onChangeTodo(editTodo);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditTodo({ ...todo, [name]: value });
  };
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
      }}>
      <TextField value={editTodo.name} onChange={onChange} label="task" name="name" />
      <TextField
        value={editTodo.description}
        onChange={onChange}
        label="description"
        name="description"
      />
      <Button onClick={onClick} variant="outlined" startIcon={<Edit />}>
        Edit
      </Button>
    </Paper>
  );
};
