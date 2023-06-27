import {React, useState, useEffect} from "react";
import ToDoList from "../List/list";
import AddButton from "../Button/AddButton/addButton";
import './style.css'
import { Tasks } from "../../utils/Tasks";
import Test from "../../pages/Test/App";
// import data from '../../utils/tasks.json'
import getData from "../../api/getAPI";
import FormDialog from "../Dialog/dialog";
import { updateTasks } from "../../api/putAPI";

const ContainerComp = () => {
    
    const [load, setLoad] = useState(false) 
    const [dialog, setDialog] = useState(false)
    console.log("Dialog is: ", dialog)
      

    const onClick = () =>{
        // Tasks.push(["a",1]);
        console.log("Clicked the add task button in container!")

        setDialog(!dialog)
        // setDialog(true)

        //console.log(Tasks)
        
    }
    // const onClick2 = () =>{
    //     updateTasks();
        
    //     console.log("Changed 3 and 6")
    // }



    return(
        <div>
            <div className="todo" >
                <Test update = {load} />
            </div>
            <div className="addbutt" >
                <AddButton onClick={onClick}/>
                {/* <AddButton onClick={onClick2}/> */}
            </div>
            {/* {dialog && <FormDialog set={dialog} load={load} setLoad={setLoad}/>} CONSIDER DOING THIS!!!!!!!! AND THE LINE 24*/}
            <FormDialog set={dialog} load={load} setLoad={setLoad}/>
        </div>
    )
}

export default ContainerComp