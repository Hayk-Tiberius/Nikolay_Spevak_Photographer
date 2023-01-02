import React, { Component} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./SpevakLogo.png";
import Main from "../Pages/Main.js";
import Portfolio from "../Pages/Portfolio.js";
import Photo from "../Pages/Photo.js";
import Contacs from "../Pages/Contacs.js";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img 
                            src={logo}
                            height="150"
                            width="150"
                            className="d-inline-block align-top"
                            alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/Portfolio">Портофилио</Nav.Link>
                                <Nav.Link href="/Photo">Фотографии</Nav.Link>
                                <Nav.Link href="/Contacs">Контакты</Nav.Link>
                            </Nav>
                     
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/Portfolio" element={<Portfolio/>}/>
                        <Route exact path="/Photo" element={<Photo/>}/>
                        <Route exact path="/Contacs" element={<Contacs/>}/>
                    </Routes>    
                </Router>
            </>    
        )
    }    
}