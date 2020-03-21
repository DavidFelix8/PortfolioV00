import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './style.scss';

class SkillsView extends Component {
  render() {
    return (
      <section className="Skills_Section container-fluid d-flex flex-column justify-content-center">
        <div className="Skills_Box align-self-center">
          <h1 className="Skills_H1">Proficiencies</h1>
          <Container className="Skills_Container">
            <Row>
              <Col>HTML5</Col>
              <Col>CSS3</Col>
              <Col>JavaScript</Col>
            </Row>
            <Row>
              <Col>Node JS</Col>
              <Col>Express</Col>
              <Col>HandleBars</Col>
            </Row>
            <Row>
              <Col>MongoDB</Col>
              <Col>Mongoose</Col>
              <Col>Passport</Col>
            </Row>
            <Row>
              <Col>React</Col>
              <Col>PHP</Col>
              <Col>Passport</Col>
            </Row>
            <Row>
              <Col>React</Col>
              <Col>PHP</Col>
              <Col>Passport</Col>
            </Row>
            <h2>Tools</h2>
            <Row>
              <Col>MongoDB Compass</Col>
              <Col>GitBash</Col>
              <Col>Github</Col>
            </Row>
            <Row>
              <Col>Postman</Col>
              <Col>Figma</Col>
              <Col>Trello</Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default SkillsView;
