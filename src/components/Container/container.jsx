import { React, useState, useEffect } from "react";
import ToDoList from "../List/list";
import AddButton from "../Button/AddButton/addButton";
import "./style.css";
import { Tasks } from "../../utils/Tasks";
import ListContainerTest2 from "../../pages/Test2/ListContainer";
import getData from "../../api/getAPI";
import FormDialog from "../Dialog/dialog";
import { updateTasks } from "../../api/putAPI";

const ContainerComp = () => {

  const [openDialog, setOpenDialog] = useState(false);
  console.log("Dialog is: ", openDialog);

  const onClick = () => {
    console.log("Clicked the add task button in container!");

    setOpenDialog(!openDialog);
  };


  return (
    <div>
      <div className="todo">
        <ListContainerTest2 openDialog={openDialog} />
      </div>
      <div className="addbutt">
        <AddButton onClick={onClick} />
      </div>
    </div>
  );
};

export default ContainerComp;
