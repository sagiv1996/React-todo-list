import { Divider, IconButton, Paper } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InputBase from "@mui/material/InputBase";

import React, { useRef } from "react";

function TodoField(props) {
  const taskRef = useRef("");
  const addValue = (e) => {
    props.newTask(taskRef.current.value);
    taskRef.current.value = null;
    e.preventDefault();
  };
  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        onSubmit={addValue}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add new task"
          required
          inputRef={taskRef}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
          onClick={addValue}
        >
          <AddBoxIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default TodoField;
