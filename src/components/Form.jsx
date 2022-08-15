import React from 'react'

import { TextField,Button,Paper } from '@mui/material'
import { useState } from 'react'

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);


  const todoCreateId = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);

    addTodo(todoObj);
    document.getElementById('outlined-basic').value = null;
  };

  
  return (
    <Paper style={{ padding: "1rem"}}>
        <div style={{ display: "flex", justifyContent: "center"}}>
            <TextField 
              id="outlined-basic" 
              label="Item" 
              variant="outlined" 
              fullWidth 
              onChange={(e) => setText(e.target.value)}
            />
            <Button variant="text" onClick={ () => todoCreateId(text) }>
              Add
            </Button>
        </div>
    </Paper>
  )
};