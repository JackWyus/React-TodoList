import React from 'react'

import { TextField, Button, Paper } from '@mui/material'
import { useState } from 'react'

export default function Form() {
  /*Estamos indicando que o atributo do state que será modificado é o text. E a função que será responsável por modificar este atributo é a setText.*/
  const [Text, setText] = useState(null);

  /*Vamos criar um sistema de acompanhamento da contagem dos ids*/
  const [id, setId] = useState(0);


  /* Vamos criar um sistema de Id para que cada novo objeto possa ter um identificado único - isso tudo vai ficar vinculado ao clicar do usuário no "Add"*/
  const todoCreateId = (Text) => {
    const todoObj = {text: Text, id: id}
    setId(id + 1);

    todoHandler(todoObj);
  }

  return (
    <Paper style={{ padding: "1rem"}}>
        <div style={{ display: "flex", justifyContent: "center"}}>

            <TextField 
              id="outlined-basic" 
              label="Item" 
              variant="outlined" 
              fullWidth 
              /* Vamos pegar o valor que o usuário está escrevendo e vamos transferir para o Hook chamado "Text" */
              /*Vamos pegar essa informação e salvar no "Home.jsx" e depois mandamos de volta para o "TodoList.jsx"*/
              onChange={(e) => setText(e.target.value)}
              />
            /*Após o usuário escrever algum valor, ele vai Clicar no button "Add" para adicionar a lista*/
            <Button variant="text" onClick={() => todoCreateId(Text)} >Add</Button>
        </div>
    </Paper>
  )
}


/*


> onChange={} - O evento onChange é utilizado para que seja realizada determinada ação após alguma mudança: muda o valor do elemento.
> onClick={} -  onClick permite chamar uma função e acionar uma ação quando um usuário clicar em um elemento.

>Estudar react hook form para controlar mais o formulário sem usar o dom necessáriamente
*/