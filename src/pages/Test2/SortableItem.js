import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import './style.css'
import { Card } from "react-bootstrap";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export function SortableItem(props) {
  // props.id
  // JavaScript

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

  const handleRemoveIconClick = (event) => {

    props.remove(props.data)
    //console.log("HI THERE !", props.data)
  }

  return (
    <div className="each-task">
      <div className="parent-class" ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Card body className="m-2" style={{ width: "500px" }}>
          {props.data}
        </Card>
      </div>
      <HighlightOffIcon className="remove-icon" onClick={handleRemoveIconClick} />
    </div>
  )
}