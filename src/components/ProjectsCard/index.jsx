import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './style.scss';

const ProjectsCard = props => {
  return (
    <div className="swiper-slide">
      <Card>
        <Card.Img variant="top" src={props.image} alt={props.name} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <span className="font-weight-bold"></span>
            <a href="www.google.pt">{`${props.website}`}</a>
          </Card.Text>
          <Card.Text>
            <span>
              <span className="font-weight-bold"></span> {props.description}
            </span>
          </Card.Text>
          <Button variant="primary">See</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectsCard;
