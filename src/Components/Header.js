import React from 'react'
import { Button, Navbar, NavDropdown, Form, FormControl, Nav } from 'react-bootstrap'
import PropTypes from 'prop-types'; //import prototype

export default function Header(props) { //for using props we pass parameter 'props'
    // Or we use simple title in doublle curly braces {{ }} instead of 'props' 
    // -->> eg: export defualt function Header({title}){
        // return(
            // <Navbar.Brand href="..."> {title} </Navbar.Brand>
        // )
    // }
    return (
        <>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>     {/* we call the title here which is define in App.js using 'props' ||| We pass the data from parent component(App.js) to child component(Header.js) */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        { props.searchBar ? <Form inline>           {/* props.searchBar(true/false) ? <if/true> : <else/false> */}
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> : "no search bar"}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

// Default Props
Header.defaultProps = {         //if data will be not pass from the parent component to child component, so this will be print default values || for demo -> remove title prop from App.js
    title : "Your Title is Here",
    searchBar : true

}

// TypeCheck
Header.propTypes = {
    title: PropTypes.string,         //PropTypes use for strict type check if we pass non-string value in App.js->Header.js 'title', then it will be given type error in web console.
    searchBar: PropTypes.bool.isRequired    // isRequired is used to mandatory to use searchBar, if searchBar is not used so it will provide error in console, -> for demo : remove defaultProps -> searchBar and remove prop from App.js
}
