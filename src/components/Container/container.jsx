import {React, useState} from "react";
import ToDoList from "../List/list";
import AddButton from "../Button/AddButton/addButton";
import './style.css'
import { Tasks } from "../../utils/Tasks";
import Test from "../../pages/Test/App";
// import data from '../../utils/tasks.json'
import getData from "../../api/getAPI";
import addArrayToEnd from "../../api/postAPI";

const ContainerComp = () => {

    let newTask = {
        "task": "new", 
        "deadline": 123
    };
    

    
    const [load, reLoad] = useState(false)
    const onClick = () =>{
        // Tasks.push(["a",1]);
        addArrayToEnd(newTask, "append");

        reLoad(!load);
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
            </div>
        </div>
    )
}

export default ContainerComp