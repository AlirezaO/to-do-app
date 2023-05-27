import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect} from 'react';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {useState} from 'react';
import { SortableItem } from './SortableItem';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { Tasks } from '../../utils/Tasks';
import getData from '../../api/getAPI';
import axios from "axios"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#6C63FF",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

function Test({update}) {
  //let Tasks = ["JavaScript", "Python", "TypeScript"]
  
  let task = []
  let deadline = []

      const [languages, setLanguages ] = useState([]);
      // const [listData, setListData] = useState(task);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/AlirezaO/to-do-app/db')
      .then((response) => {
        let data =response.data
        data.tasks.map((item) => {
          
          task.push(item[0]);
          deadline.push(item[1]);
        })
        //console.log("this: ", data)

        setLanguages(task);
      })
      .catch((error) => console.log(error))
    // setListData(task);
    
  }, [update]);


  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
        <div >
        <TableContainer sx={{marginTop:"30px"}} component={Paper}>
            <Table sx={{ minWidth: "700px" }} stickyHeader aria-label="sticky table">

                <TableHead>
                    <TableRow>

                        <StyledTableCell>Tasks</StyledTableCell>
                        <StyledTableCell >Deadline</StyledTableCell>
                    
                    </TableRow>
                </TableHead>

                <SortableContext
                items={languages}
                strategy={verticalListSortingStrategy}
                
                >
                
                    <TableBody>

                        {languages.map(language => 
                        
                            <SortableItem key={language} id={language} data={language}/>
                        
                        )}
                    </TableBody>

                </SortableContext>
            </Table>
        </TableContainer>
        </div>

    </DndContext>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        //console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
      });
      
    }
  }
}

export default Test;