import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoListItem(props) {
  const handleChangeCompleted = (e) => {
    props.updateTask(props.index, !props.item.completed);
  };

  const handlerDeleteClick = (e) => {
    props.deleteTask(props.index);
    e.preventDefault(props.index);
  };

  return (
    <>
      <ListItem
        key={props.index}
        secondaryAction={
          <IconButton aria-label="Icon" onClick={handlerDeleteClick}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <Checkbox
            checked={props.item.completed}
            onChange={handleChangeCompleted}
          />
        </ListItemIcon>
        <ListItemText
          primary={`${props.item.value}`}
          style={{
            textDecorationLine: props.item.completed ? "line-through" : null,
          }}
        />
      </ListItem>
    </>
  );
}
