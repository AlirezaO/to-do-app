import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useState } from 'react';
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
import FormDialog from '../../components/Dialog/dialog';
import { setRef } from '@mui/material';
import updateSortOrder from '../../utils/updateTaskOrders';
import updateTasksInJsonServer from '../../api/putAPI';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6C63FF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));




function ListContainerTest2({ openDialog }) {
  const [data, setData] = useState([]);
  const [taskNameList, setTaskNameList] = useState([]);
  const [updateTasks, setUpdateTasks] = useState({})
  let task = []
  let deadline = []
  // let data = null

  useEffect(() => {
    axios
      .get('http://localhost:3002/tasks')
      .then((response) => {
        setData(response.data);
        let t = response.data
        t.map((item) => {

          task.push(item.array.task);
          deadline.push(item.array.deadline);
        })
        // console.log("this: ", t[t.length - 1].id)

        setTaskNameList(task);
      })
      .catch((error) => console.log(error))

    // console.log("CALLED!")

  }, []);

  useEffect(() => {
    let fullData = data
    fullData = (updateSortOrder(taskNameList, fullData))
    setData(fullData)
    console.log("taskNameList: ", taskNameList)
  }, [taskNameList]);

  useEffect(() => {
    if (data.length > 0) {
      let lastID = data[data.length - 1].id + 1
      setData([
        ...data,
        {
          "array": { ...updateTasks },
          "id": lastID
        }
      ])
      setTaskNameList([
        ...taskNameList,
        updateTasks.task
      ])
    }

    console.log("NEW TASK: ", updateTasks)

  }, [updateTasks])

  useEffect(() => {
    console.log("Data is: ", typeof(data))
    // updateTasksInJsonServer(data);
  }, [data])


  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div >
          <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
            <Table sx={{ minWidth: "700px" }} stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Tasks</StyledTableCell>
                  <StyledTableCell>Deadline</StyledTableCell>
                </TableRow>
              </TableHead>

              <SortableContext
                items={taskNameList}
                strategy={verticalListSortingStrategy}
              >
                <TableBody>
                  {taskNameList.map(task =>
                    <SortableItem key={task} id={task} data={task} />
                  )}
                </TableBody>
              </SortableContext>
            </Table>
          </TableContainer>
        </div>
      </DndContext>

      <FormDialog openDialog={openDialog} setUpdateTasks={setUpdateTasks} />
    </>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    // console.log("ACTIVE: " + active.id);
    // console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setTaskNameList((items) => {
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

export default ListContainerTest2;