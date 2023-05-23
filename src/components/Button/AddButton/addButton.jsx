import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Tasks } from '../../../utils/Tasks';


// Create a custom theme with a lighter purple color variant
const theme = createTheme({
  palette: {
    primary: {
      main: '#6C63FF', // Lighter purple color
    },
  },
});

export default function AddButton({onClick}) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add" onClick={onClick}>
          <AddIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
}
