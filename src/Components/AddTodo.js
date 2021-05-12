import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const Forms = {
        backgroundColor: "#F2F2F2",
        padding: "2%"
    }

    const todoo = {
        color: "white",
        backgroundColor: "#008CC0",
        padding: "10px",
        fontFamily: "Arial",
        cursor: "pointer",
        textAlign: "center",
    };

    const submit = (e) => {
        e.preventDefault();     //Page does't load on submit form

        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <>
            <h3 style={todoo} className="my-3">Add Todo's Item</h3>

            <Form onSubmit={submit} className="container-fluid col-lg-10" style={Forms}>
                <Form.Group controlId="formBasicTITLE">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="formBasicDESC">
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control value={desc} onChange={(e) => { setDesc(e.target.value) }} type="text" placeholder="Description" />
                </Form.Group>
                <Button variant="info" type="submit">Submit</Button>
            </Form>
        </>
    )
}


