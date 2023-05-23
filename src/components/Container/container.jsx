import {React, useState} from "react";
import ToDoList from "../List/list";
import AddButton from "../Button/AddButton/addButton";
import './style.css'
import { Tasks } from "../../utils/Tasks";



const ContainerComp = () => {
    const [load, reLoad] = useState(false)

    const onClick = () =>{
        Tasks.push(["a",1]);
        reLoad(!load);
        console.log(Tasks)
    }

    return(
        <div>
            <div className="todo" >
                <ToDoList update = {load}/>
            </div>
            <div className="addbutt" >
                <AddButton onClick={onClick}/>
            </div>
        </div>
    )
}

export default ContainerComp