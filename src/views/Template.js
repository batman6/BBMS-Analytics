import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

import { Route, NavLink, BrowserRouter } from "react-router-dom";

import Landing from "./Landing";
import MaleFemalePie from "./Pie Chart/Male-Female";
import AgeLine from "./Line Chart/Age";
import BloodGroup from "./Column Chart/BloodGroup";
import Area from "./Column Chart/Areawise Donation";

class Template extends Component {
    render() {    
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Blood Bank Analytics</Navbar.Brand>
                  </Navbar>		  
                  <BrowserRouter>		  
                        <Row>
                            
                            <Nav to="/" className="flex-sm-column" id="sidebar">
                                <ListGroup className="nav nav-sidebar flex-sm-column">
                                    <ListGroup.Item>
                                        <a href="#overview" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>CHARTS</span></a>
                                    </ListGroup.Item>
                                    <ListGroup>
                                        <ListGroup className="sub-menu collapse" id="overview">
                                            <ListGroup.Item> <NavLink exact to="/male-feamle-blood-donation-ratio">Male/Female Blood Donation Ratio</NavLink></ListGroup.Item>
                                            <ListGroup.Item> <NavLink exact to="/blood-group">Bloog Group</NavLink></ListGroup.Item>									
                                            <ListGroup.Item> <NavLink exact to="/area-wise-blood-donation">Area-wise Blood Donation</NavLink></ListGroup.Item>
                                            <ListGroup.Item> <NavLink exact to="/age-wise-blood-donation">Age-Wise Blood Donation</NavLink></ListGroup.Item>
                                        </ListGroup>
                                    </ListGroup>
                                    <ListGroup.Item role="separator" className="divider"></ListGroup.Item>    
                                </ListGroup>
                            </Nav>
                            
                            <Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
                                <Container>
                                    <div className="content">
                                        <Route exact path="/" component = {Landing}/>
                                        <Route exact path="/male-feamle-blood-donation-ratio" component={MaleFemalePie}/>
                                        <Route exact path="/age-wise-blood-donation" component={AgeLine}/>    
                                        <Route exact path="/blood-group" component={BloodGroup}/>
                                        <Route exact path="/area-wise-blood-donation" component={Area}/>                                   
                                    </div>
                                </Container>
                            </Col>					
                        </Row>			
                  </BrowserRouter>	
                </div>
        );
      }
}

export default Template;
