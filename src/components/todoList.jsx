import React, { useState } from 'react'
import TodoField from './todoField';

export default function TodoList() {
        const [items, setArray] = useState([]);
        const handlerAddValueEvent = (val) => {
            setArray([...items, val])
        }
  return (
    <>
        <TodoField newTask={handlerAddValueEvent}/>
        <p>
        {items}
        </p>
    </>
  )
}

