// import logo from './logo.svg';   --> we can't use logo
import './App.css';
import React, { useState } from 'react';
// Import Components  --->>>>  when we use "default export (rfc) then we don's use {} in import, if we use "arrow function '()=>' " then we use {} in import 

import Header from "./Components/Header";
import {Todos} from "./Components/Todos";
import {Footer} from "./Components/Footer";
// import {TodoItem} from "./Components/TodoItem";

function App() {
  const onDelete = (todo) => {
    console.log("Deleted todo", todo);

    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
  }

  //let todos = [   //todos pass in {todos}
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "For Wheat Flour"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "For Excercise"
    },
    {
      sno: 3,
      title: "Go to the school",
      desc: "For Wheat Study"
    },
  ]);
  return (
    <>
    <Header title="My Todo List" searchBar={true}/>  {/* 'title' and 'searchBar' pass the data into Header.js component*/}
    <Todos todos={todos} onDelete={onDelete} />     {/* Pass the javascript todos object */}
    <Footer />
    </>
  );
}

export default App;
