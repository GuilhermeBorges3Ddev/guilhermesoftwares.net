import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import ProfilePic from "../ProfilePictureCard/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Container> 
          <Row className="d-flex align-self-start my-5">
            <Col md="12">
              <Button>Portfolio</Button>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Button>Vídeos</Button>
            </Col>
            <Col md="4">
              <ProfilePic />
            </Col>
            <Col md="4">
              <Button>Contato</Button>
            </Col>
          </Row>
          <Row className="d-flex align-self-start my-5">
            <Col md="12">
              <Button>Sobre</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;