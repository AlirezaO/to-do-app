import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from '../Input/TextInput/textInput';
import addArrayToEnd from "../../api/postAPI";
import useInput from "../../hooks/useInput";

export default function FormDialog({set}) {
  const [open, setOpen] = useState(set);
  console.log("Set is :",set)
  console.log("Open is :",open)
  

  const task = useInput('task', '')
  const deadline = useInput('deadline', '')

  const handleAdd = (e, task, deadline) => {
    e.preventDefault();
    let newTask = {
      "task": task.value, 
      "deadline": deadline.value
    }

    console.log(newTask.task)//THIS RETURNS EMPTY!!?!?!?!!?!?!?!?!?
    addArrayToEnd(newTask, "append");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    
    setOpen(true)
    console.log("In UseEffec open is: ", open)
    
  }, [set]);

  return (
    <div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <form onSubmit={(e) => handleAdd(e, task, deadline)}>
          <DialogContent>
            <TextInput label="Gotta do this..."/>
            <TextInput label="Deadline"/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" type="submit" size="large">
              "Add"
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}