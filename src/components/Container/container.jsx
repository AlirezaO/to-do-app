import {React, useState} from "react";
import ToDoList from "../List/list";
import AddButton from "../Button/AddButton/addButton";
import './style.css'
import { Tasks } from "../../utils/Tasks";
import Test from "../../pages/Test/App";
import axios from "axios";
// import data from '../../utils/tasks.json'

function getData() {
    axios
      .get('https://my-json-server.typicode.com/typicode/demo/posts')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => console.log(error))
    // fetch('../../utils/tasks.json')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Work with the JSON data
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         console.error('Error reading local JSON file:', error);
    //     });

  }

const ContainerComp = () => {


    getData();
    const [load, reLoad] = useState(false)
    const onClick = () =>{
        Tasks.push(["a",1]);

        reLoad(!load);
        console.log(Tasks)
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