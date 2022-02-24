import { Card, List } from "@mui/material";
import React, { useState } from "react";
import TodoField from "./todoField";
import TodoListItem from "./todoListItem";

export default function TodoList() {
  const [items, setArray] = useState([]);
  const handlerAddValueEvent = (val) => {
    setArray([...items, { value: val, completed: false }]);
  };
  const deleteTask = (index) => {
    setArray([...items.slice(0, index), ...items.slice(index + 1)]);
  };
  const updateTask = (index, val) => {
    const updateTodos = [...items];
    updateTodos[index] = { value: updateTodos[index].value, completed: val };
    setArray(updateTodos);
  };
  return (
    <Card
      sx={{
        maxWidth: 400,
        bgcolor: "background.paper",
        margin: "50px auto",
        paddingTop: 1,
      }}
    >
      <TodoField newTask={handlerAddValueEvent} />
      <List>
        {items.map((item, index) => (
          <TodoListItem
            item={item}
            index={index}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </List>
    </Card>
  );
}
