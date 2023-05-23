import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';






const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#6C63FF",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#e2eafc"
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export function SortableItem(props) {
    // props.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        display: "flex"
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
          <StyledTableRow key={props.task[0]}>
                    
              <StyledTableCell component="th" scope="row">
                  {props.task[0]}
              </StyledTableCell>

              <div className='deadline-rows'>
                  <StyledTableCell >{props.task[1]}</StyledTableCell>
              </div>


            </StyledTableRow>
        </div>
    );

   
}