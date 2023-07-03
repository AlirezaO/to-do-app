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
  const [deadlineData, setDeadlineData] = useState([]);
  const [taskNameList, setTaskNameList] = useState([]);
  const [taskDeadlineList, setTaskDeadlineList] = useState([])
  const [addTasks, setAddTasks] = useState({})
  const [removeTasks, setRemoveTasks] = useState("")
  const [editTasks, setEditTasks] = useState({ editedTask: "", id: "" })


  let task = []
  let deadline = []


  //useEffect for Getting Data at the start of the program
  useEffect(() => {
    axios
      .get('http://localhost:3002/tasks')
      .then((response) => {
        setData(response.data);
        let t = response.data
        t.map((item, index) => {
          // x.push([item.array.task, item.array.deadline])
          task.push(item.array.task);
          deadline.push(item.array.deadline);
        })

        setTaskNameList(task);
        setTaskDeadlineList(deadline)
      })
      .catch((error) => console.log(error))


    // console.log("CALLED!")

  }, []);


  //useEffect for Updating Data
  useEffect(() => {
    let fullData = data
    let fullDeadline = deadlineData
    setData(updateSortOrder(taskNameList, fullData, 1))
    setDeadlineData(updateSortOrder(taskDeadlineList, fullDeadline, 2))

    console.log("taskDeadlineList: ", taskDeadlineList, " And taskNameList: ", taskNameList)
    //console.log("taskNameList: ", taskNameList)
  }, [taskNameList, taskDeadlineList]);

  //useEffect for Adding a new Task
  useEffect(() => {
    if (data.length > 0) {
      let lastID = data[data.length - 1].id + 1
      setData([
        ...data,
        {
          "array": { ...addTasks },
          "id": lastID
        }
      ])
      setTaskNameList([
        ...taskNameList,
        addTasks.task
      ])
      setTaskDeadlineList([
        ...taskDeadlineList,
        addTasks.deadline
      ])
      console.log("in the addTasks useEffect!")
    } else if (data.length === 0) {
      let lastID = 0
      setData([
        ...data,
        {
          "array": { ...addTasks },
          "id": lastID
        }
      ])
      setTaskNameList([
        ...taskNameList,
        addTasks.task
      ])
      setTaskDeadlineList([
        ...taskDeadlineList,
        addTasks.deadline
      ])
    }

    console.log("NEW TASK: ", addTasks)

  }, [addTasks])

  useEffect(() => {
    //console.log("Data is: ", typeof (data))
    //updateTasksInJsonServer(data);  THIS IS THE API THAT UPDATES THE TASKS LIST IN THE JSON SERVER, BUT THE PUT API ISN'T AVAILABLE APPARENTLY
  }, [data])

  //useEffect for Removing a Task
  useEffect(() => {
    const removingIndex = taskNameList.indexOf(removeTasks)
    setTaskNameList((prev) => prev.filter((item, index) => index !== removingIndex))
    setTaskDeadlineList((prev) => prev.filter((item, index) => index !== removingIndex))
  }, [removeTasks])

  //useEffect for editing a Task
  useEffect(() => {
    
    const editingIndex = editTasks.id
    const editingText = editTasks.editedTask
    const newArray = [...taskNameList];
    newArray[editingIndex] = editingText
    setTaskNameList(newArray)
    // console.log(editingText, editingIndex) 
  }, [editTasks])



  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      // onDragStart={handleDragStart}
      >
        <div >
          <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Tasks</StyledTableCell>

                </TableRow>
              </TableHead>

              <SortableContext
                items={taskNameList}
                strategy={verticalListSortingStrategy}
              >
                <TableBody sx={{
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}>
                  {taskNameList.length > 0 ?
                    (taskNameList.map((task, index) =>
                      <div>
                        <SortableItem key={task} id={task} data={task} remove={setRemoveTasks} edit={setEditTasks} ind={index}/>
                      </div>
                    ))
                    :
                    (
                      <h1>EMPTYYYYYY</h1>//CHANGE THIS TO SOMETHING BETTER!!!!
                    )
                  }
                </TableBody>
              </SortableContext>
            </Table>
          </TableContainer>
        </div>
      </DndContext>

      <FormDialog openDialog={openDialog} setUpdateTasks={setAddTasks} />
    </>
  );

  // function handleDragStart(event) {
  //   console.log("Drag Start called");
  // }

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    // console.log("ACTIVE: " + active.id);
    // console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setTaskNameList((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        setTaskDeadlineList((i) => arrayMove(i, activeIndex, overIndex))
        return arrayMove(items, activeIndex, overIndex);
      });

    }
  }
}

export default ListContainerTest2;