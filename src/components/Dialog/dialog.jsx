import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from '../Input/TextInput/textInput';
import addArrayToEnd from "../../api/postAPI";
import useInput from "../../hooks/useInput";
import TextField from '@mui/material/TextField';


export default function FormDialog({set, load, reLoad}) {
  const [open, setOpen] = useState(set);
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');

  console.log("Set is :",set)
  console.log("Open is :",open)
  

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };  
  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };  


  const handleAdd = () => {
    let newTask = {
      "task": task, 
      "deadline": deadline
    }
    console.log("Clicked the dialog Add button and the newTask is: ", newTask)
    addArrayToEnd(newTask, "append");
    setOpen(false);
    reLoad(!load)
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
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="task"
              label="Gotta do this..."
              fullWidth
              variant="standard"
              value={task}
              onChange={handleTaskChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="deadline"
              label="Deadline"
              fullWidth
              variant="standard"
              value={deadline}
              onChange={handleDeadlineChange}
            />
          </DialogContent>
          <DialogActions> 
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAdd} variant="contained" type="submit" size="large">
              "Add"
            </Button>
          </DialogActions>
      </Dialog>
    </div>
  );
}