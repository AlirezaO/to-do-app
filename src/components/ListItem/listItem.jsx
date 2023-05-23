import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const ListItems = () => {


  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
 
            <Demo>
                <List dense={true}>

                    <ListItem>
                    <ListItemText
                        primary="Single-line item"
                        secondary='Secondary text'
                    />
                    </ListItem>
                 </List>
            </Demo>

    </Box>
  );
}


export default ListItems;