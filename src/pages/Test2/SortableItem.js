import React, { useState, useEffect } from 'react'

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Card } from "react-bootstrap";

import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';

import './style.css'



export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    maxWidth: "600px"
  }

  const [isEditMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(props.data);
  const [checked, setChecked] = useState();

  const handleRemoveIconClick = (event) => {
    props.remove(props.data);
  }

  const handleEditIconClick = (event) => {
    setEditMode(true);
  }

  const handleSaveButtonClick = () => {
    // Save the edited text or perform any other necessary actions
    props.edit({ editedTask: editedText, id: props.ind })
    //console.log("Edited Text:", editedText);
    setEditMode(false);
  }

  const handleCancelButtonClick = () => {
    setEditMode(false);
  }

  const handleEditChange = (e) => {
    setEditedText(e.target.value.trim()); // Trim the input value before updating the state
  }

  const handleCheckChange = (event) => {
    props.setDone(props.ind)
    
  };


  // useEffect(() => {
  //   setChecked(props.done[props.ind])
  // }, [props.done])
  

  return (
    <div className="each-task">
      <div className="parent-class" ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Card body className="m-2" style={{ width: "500px" }}>
          {isEditMode ? (
            <input
              type="text"
              value={editedText}
              onChange={handleEditChange}
            />
          ) : (
            <span style={{textDecoration: checked ? 'line-through': ''}}>{props.data}</span>
          )}
        </Card>
      </div>
      {isEditMode ? (
        <>
          <button onClick={handleSaveButtonClick}>Save</button>
          <button onClick={handleCancelButtonClick}>Cancel</button>
        </>
      ) : (
        <>
          <Checkbox
            // checked={checked}
            onChange={handleCheckChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <EditIcon sx={{ color: "#6C63FF" }} className="side-icons" onClick={handleEditIconClick} />
          <HighlightOffIcon sx={{ color: "#6C63FF" }} className="side-icons" onClick={handleRemoveIconClick} />
        </>
      )}
    </div>
  )
}