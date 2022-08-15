import { Container, List } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  
  const deleteTodo = (id) => {
    let filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <Container maxWidth="xs" style={{marginTop: "1rem"}}>
      <Form addTodo={addTodo} />
      <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop: "1rem"}}>
          {todos.map((todo) => ( <TodoList key={todo.id} todo={ todo }  deleteTodo={ deleteTodo } />))}
      </List>
  </Container>
  )
}
