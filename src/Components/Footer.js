import React from 'react'
import { Card } from 'react-bootstrap'

export const Footer = () => {
    const card ={
        border: "none",
        borderRadius: 0,
        // position: "absolute",
        // top: "90vh",
        // width: "100%",
        marginTop : "3%",
    }

    const cardBody = {
        
    }
    return (
        <>
            <footer>
                <Card style={card} className="bg-dark">
                    <Card.Body style={cardBody} className="text-center text-light">Copyright &copy; MyToDoList.com</Card.Body>
                </Card>
            </footer>
        </>
    )
}
