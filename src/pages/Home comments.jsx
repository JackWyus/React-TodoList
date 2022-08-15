import { Container, List } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'

export default function Home() {
    const [todos, setTodos] = useState([])
    
    /*A função "addTodo" é responsável por chamar o setTodos e acessar sua Array, passaremos para essa Array acessada um novo elemento como parametro(todo) que será a informação que o usuário mandará*/
    const addTodo = (todo) => {
      setTodos([...todos, todo]);
    };
   
    /*A função "deleteTodo" é responsável por excluir itens já criados pelo usuário, baseado no seu id único e enviar esse novo estado para a aplicação.*/
    const deleteTodo = (id) => {
      /*A variável "filtered" "recebe" a responsabilidade de "excluir" determinados itens que não passem pela filtragem e armazenar a nova matriz gerada para que possar ser solicitada.*/
      let filtered = todos.filter((todo) => todo.id !== id);
                    /*Estamos chamando a Array "todos" para que o método filter() percorra cada objeto dentro desta array, logo em seguida estamos passando a valor atual de cada objeto "todo" e depois estamos partindo para uma validação, onde temos o objeto "todo" e sua propriedade id - "todo.id !== id" é a condição.*/
      setTodos(filtered);
      /*Port fim, estamos apenas atualizando o estado da aplicação, pois uma nova matriz de array foi gerada*/
    };
    

  return (
    <Container maxWidth="xs" style={{marginTop: "1rem"}}>

      /*Precisamos mandar a informação do que o usuário digitou para o hook "todos" atráves do form, a partir dai, esse objeto novo vai ser lido pelo .map que retornará um "TodoList" */
      <Form addTodo={ addTodo } />

      <List sx={{ width: '100%', bgcolor: 'background.paper', marginTop: "1rem"}}>
          /*Para cada elemento dentro do array do "todos",percorrido, vamos criar um novo "TodoList"*/
          {todos.map( (todos) =>  <TodoList todo={todo} />)}// vamos fazer o mapeamento do todos para o TodoList
      </List>

  </Container>
  )
}


/*

>>> Métodos JavaSCript usados;<<<
  > o que significa uma função callback. Na prática, ela é uma função de retorno, ou seja, ela executa uma ação para que seu resultado seja utilizado em uma outra função anterior.


  > O método filter() cria uma nova matriz com os elementos que passam no teste/filtagrem fornecido pela função, isso significa que ele retornará uma nova matriz de objetos

  > map() - O método map() invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado, mas o que isso quer dizer?
  Isso significa que ele percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, map() retorna o novo array com todos os elementos “traduzidos”.
  No React exibimos uma coleção de dados utilizando map. Para isso devemos inseri-lo entre chaves {} dentro do JSX.



  Arrow function é só isso aqui;

    () => {}

    colocamos ela dentro de uma const para podermos armazerna e acessar dados dentro dela, por isso precisamos atribuir para um const


    function todoHandler(){

    }
*/