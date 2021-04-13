import React from 'react'; 
import {Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'
import Ironicons from '../../components/Education/Ironicons'

import './Education.scss';

export default function Education() {
    return (
    <>
            <Container >
                <Row className="grid-container">
                    <Col className="col-card-education" xs={10} >
                         <div>
                           
                                <h2>Full Stack Web Developer</h2>
                                <h3>Ironhack </h3>
                                <p> Javascript | ES6| MongoDB | Express | React | Node-js| HTML5 | CSS3 | Handlebars | Jasmine | Git </p>
                            
                            <Link to="/">View credential</Link>
                        </div>
                    </Col>

                   
                    

                    {/* <Col className="col-card-education" xs={10}>
                
                        <h2>Graphic Design & UX/UI</h2>
                        
                        <p>Currently studying</p>
                        
                    </Col>
                    */}
                     <Col className="col-card-education" xs={10} >
                         <div>
                           
                                <h2>Graphic Design & UX/UI</h2>
                                <h3>Aula Creactiva </h3>
                                <p> Illustrator | InDesign| Photoshop | Sketch | Adobe XD | Design Thinking| User Interface Design </p>
                            
                            <Link to="/">View credential</Link>
                        </div>
                    </Col>

                    <Col className="col-card-education" xs={10} >
                        <h2>Complementary knowledge</h2>
                        
                        <ul>
                            <li>React Hooks, Redux & Material UI </li>
                            <li>GatsbyJs </li>
                            <li>Angular 8 basics </li>
                            <li>
                                <Link to="https://www.udemy.com/certificate/UC-46ac5424-4298-4deb-a1fa-77865f6997de/">
                               NodeJs
                                </Link>
                             </li>
                             <li>
                                <Link to="https://www.domestika.org/es/certificates/ed6b9b0b1c294963f6c39976237f1568.pdf">
                                CSS Grid & Flexbox 
                                </Link>
                            </li>
                            
                       </ul>
                    </Col>
                </Row>
            
            
        </Container>
  
    </>
    );
}
