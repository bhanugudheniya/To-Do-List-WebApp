// import logo from './logo.svg';   --> we can't use logo
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



// Import Components  --->>>>  when we use "default export (rfc) then we don's use {} in import, if we use "arrow function '()=>' " then we use {} in import 
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Footer } from "./Components/Footer";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
// import {TodoItem} from "./Components/TodoItem";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete = (todo) => {
    console.log("Deleted todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    //local storage
    localStorage.setItem("todos", JSON.stringify(todos));
    // localStorage.getItem("todos");    //get old todos which is stored in web local storage
  }

  //Add Todo
  const addTodo = (title, desc) => {
    console.log("Adding Todo", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    //localstorage
    // if(localStorage.getItem("todos")){

    // }
  }

  //let todos = [   //todos pass in {todos}
  // const [todos, setTodos] = useState([ ----------------->>>>>>>>>>>>>>>>>>> for static use
  //   {
  //     sno: 1,
  //     title: "Go to the market",
  //     desc: "For Wheat Flour"
  //   },
  //   {
  //     sno: 2,
  //     title: "Go to the gym",
  //     desc: "For Excercise"
  //   },
  //   {
  //     sno: 3,
  //     title: "Go to the school",
  //     desc: "For Wheat Study"
  //   },
  // ]);

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={true} />  {/* 'title' and 'searchBar' pass the data into Header.js component*/}

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />     {/* Pass the javascript todos object */}
              </>
            )
          }}>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>
  );
}

export default App;





// React-Router -->> npm i react-router-dom
