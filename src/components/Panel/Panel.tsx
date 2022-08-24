import React, { useState } from 'react';
import Add from '@mui/icons-material/Add';
import { TextField, Paper, Button } from '@mui/material';

const DEFAULT_TODO = { name: '', description: '' };

export const Panel = () => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const onClick = () => {
    console.log('@', todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        padding: '25px 30px',
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        gap: 1,
      }}>
      <TextField
        value={todo.name}
        onChange={onChange}
        label="name"
        sx={{ width: '300px' }}
        name="name"
      />
      <TextField
        value={todo.description}
        onChange={onChange}
        label="description"
        sx={{ width: '300px' }}
        name="description"
      />
      <Button onClick={onClick} variant="outlined" startIcon={<Add />}>
        Add
      </Button>
    </Paper>
  );
};