import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css'
import { Tasks } from '../../utils/Tasks';
// import ListItems from '../ListItem/listItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6C63FF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#e2eafc",
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function createData(Task, Deadline) {
//     return { Task, Deadline };
//   }
  

export default function ToDoList({update}) {

  const [listData, setListData] = useState(Tasks); // Initial state with data.list1

  useEffect(() => {
    setListData(Tasks);
  }, [update]);


  return (
    <div className="to-do-list">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Tasks</StyledTableCell>
                  <StyledTableCell >Deadline</StyledTableCell>
               
            </TableRow>
            </TableHead>
            <TableBody>
            {listData.map((task) => (
                <StyledTableRow key={task[0]}>
                  
                  <StyledTableCell component="th" scope="row">
                      {task[0]}
                  </StyledTableCell>

                  <div className='deadline-rows'>
                      <StyledTableCell >{task[1]}</StyledTableCell>
                  </div>

    
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}