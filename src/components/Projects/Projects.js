import React from 'react'; 
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

import './Projects.scss';

export default function Projects() {
    return (
    <>

            <Container >
                <Row className="grid-container">
                     <Col className="col-card villaverde" xs={10} >
                        <Link to="https://www.transportesvillaverde.es">
                            <h2>Transportes Villaverde</h2>
                        </Link>
                      
                            <h5>Trucking company website, first real project </h5>
                            <p>Made with Wordpress</p>
                        
                       
                       
                        </Col>
                    {/* <Col className="col-card" xs={10} >
                        <h2>Transportes Villaverde</h2>
                        <h5>Trucking company website, first real project </h5>
                        <p>Made with Wordpress</p>
                        
        
                    </Col> */}
                    <Col className="col-card citricco" xs={10} >

                        <div className="info-citricco">
                            <Link to="http://citricco.herokuapp.com/">
                                <h2>Citricco</h2>
                            </Link>
                             
                             <h5>Ecommerce using React</h5>
                            <p>Final assesment at Ironhack,  handmade earrings e-commerce.</p>
                            </div>
                        {/* <div classNamwe="buttons">
                        
                                        <Link to="http://citricco.herokuapp.com/">Visit</Link>
                                
                                
                            </div> */}
                        
     
                    </Col>
                       
                    <Col className="col-card coctelerie" xs={10} >
                        <Link to="https://le-cocktailerie.herokuapp.com">
                            <h2>Cocktailerie</h2>
                        </Link>
                      
                        
                        <h5>A Cocktails Web using the CocktailDB API</h5>
                       
                        </Col>
                    <Col className="col-card hackout" xs={10}>
                        <Link to="https://scmoreira.github.io/Breakout-canvas-game/">
                            <h2>Hackout Game</h2>
                        </Link>
                       
            
                        <h5>A game made with canvas, inspired by the Breakout game.</h5>
                        <Link to="https://scmoreira.github.io/Breakout-canvas-game/">Play!</Link>
                        
                      
                    </Col>
                   
                   
                </Row>
            
            
        </Container>
  
    </>
    );
}
