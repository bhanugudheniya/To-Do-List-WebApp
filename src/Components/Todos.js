import React from 'react'
import { TodoItem } from './TodoItem';
// import ReactDOM from 'react-dom';

export const Todos = (props) => {
    const todoo = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        cursor: "pointer",
        textAlign: "center",
    };
    return (
        <>
        <div>
                <h3 style={todoo} className="my-5">Todo's List</h3>
        </div>
            <div className="container">
                {props.todos.length === 0 ? "No Todos to Display" :
                    props.todos.map((todo) => {
                        return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> )
                    })
                }
                {/* <TodoItem todo={props.todos[0]} />        ----> use for single todo at a time with index number*/}
            </div>
        </>
    )
}

// javascript higher order method
// map() returns array