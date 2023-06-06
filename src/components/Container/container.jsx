import {React, useState} from "react";
import ToDoList from "../List/list";
import AddButton from "../Button/AddButton/addButton";
import './style.css'
import { Tasks } from "../../utils/Tasks";
import Test from "../../pages/Test/App";
// import data from '../../utils/tasks.json'
import getData from "../../api/getAPI";
import FormDialog from "../Dialog/dialog";

const ContainerComp = () => {
    
    const [load, reLoad] = useState(false)
    const [dialog, setDialog] = useState(false)

    console.log("Dialog is: ", dialog)
    const onClick = () =>{
        // Tasks.push(["a",1]);
        console.log("here!")

        setDialog(!dialog)

        reLoad(!load); //THIS SHOULD HAPPEN INSIDE OF THE DIALOG SO WHEN THE DIALOG IS SUBMITTED THEN THE PAGE SHOULD REFRESH!
        //console.log(Tasks)
        
    }

    return(
        <div>
            <div className="todo" >
                {/* <ToDoList update = {load}/> */}
                <Test update = {load}/>
            </div>
            <div className="addbutt" >
                <AddButton onClick={onClick}/>
                <FormDialog set={dialog}/>
            </div>
        </div>
    )
}

export default ContainerComp