import React from 'react'

// export const TodoItem = ({ todo, onDelete }) => {                                ---> Method 1
export const TodoItem = (props) => {
    const itemContainer = {
        marginTop : "3%",
    }

    const hrAbove = {
        height: "2px",
    }

    return (
        <>

            {/* <div>                                                              --> Method 1
                <h4>{todo.sno}.) {todo.title}</h4>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
            </div> */}

            <div style={itemContainer}>
                <hr style={hrAbove} />
                <h4>{props.todo.sno}.) {props.todo.title}</h4>
                <p>{props.todo.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={() => {props.onDelete(props.todo)}}>Delete</button>
            </div>
        </>
    )
}
