import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export default function TextInput({label, id, type}) {
  return (
    <Box
      sx={{
        width: 400,
        maxWidth: '100%',
      }}
    >
      <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
          <Input 
            id="standard-adornment-amount"
            className="custom-input" // Apply the custom CSS class
          />
        </FormControl>
    </Box>
  );
}