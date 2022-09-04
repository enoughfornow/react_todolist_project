import React from 'react';

import { Box, Typography } from '@mui/material';

interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <Box textAlign="left">
    <Typography sx={{ fontSize: 35 }} variant="h1" component="h1" gutterBottom>
<<<<<<< HEAD
    You have {todoCount} task(s) for today!
=======
       You have {todoCount} task(s) for today!
>>>>>>> b15fe94a676a38d9e7fbd81677202c0e6103e401
    </Typography>
  </Box>
);
