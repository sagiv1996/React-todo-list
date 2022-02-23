import { Button, TextField } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

import React, { useRef } from "react";

function TodoField(props) {
  const taskRef = useRef("");
  const addValue = (e) => {
    props.newTask(taskRef.current.value);
    e.preventDefault(taskRef.current.value);
  };
  return (
    <>
      <TextField
        label="Add your task"
        required
        inputRef={taskRef}
        size="medium"
      />
      <Button endIcon={<AddBoxIcon />} onClick={addValue} size="large">
        Add
      </Button>
    </>
  );
}

export default TodoField;
