import React from 'react';
import './style.scss';
import styled from '@emotion/styled/macro';

const ProjectsCard = props => {
  const Hover = styled.div({
    opacity: 0,
    transition: 'opacity 350ms ease'
  });

  const DisplayOver = styled.div({
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: 2,
    transition: 'background-color 350ms ease',
    backgroundColor: 'transparent',
    padding: '20px 20px 0 20px',
    boxSizing: 'border-box'
  });

  const BigTitle = styled.h2({
    textTransform: 'uppercase',
    color: 'red',
    fontWeight: 'bold'
  });

  const Span = styled.div({});

  const SubTitle = styled.h4({
    transform: 'translate3d(0,50px,0)',
    transition: 'transform 350ms ease'
  });

  const Paragraph = styled.p({
    transform: 'translate3d(0,50px,0)',
    transition: 'transform 350ms ease'
  });

  const Background = styled.div({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#FFF',
    position: 'relative',
    cursor: 'pointer',
    backgroundImage: `url(${props.image})`,
    [`:hover ${DisplayOver}`]: {
      backgroundColor: 'rgba(0,0,0,.5)'
    },
    [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
      transform: 'translate3d(0,0,0)'
    },
    [`:hover ${Hover}`]: {
      opacity: 1
    }
  });

  const CTA = styled.a({
    position: 'absolute',
    bottom: '20px',
    left: '20px'
  });
  const CTA2 = styled.a({
    position: 'absolute',
    bottom: '20px',
    left: '130px'
  });

  return (
    <div className="swiper-slide">
      <Background className="ProjectsCard-Background">
        <DisplayOver>
          <BigTitle className="ProjectsCard-BigTitle">{props.name}</BigTitle>
          <Hover className="ProjectsCard-Hover">
            <Span className="ProjectsCard-Span">Made with:</Span>
            <SubTitle className="ProjectsCard-Languages"> {props.languages}</SubTitle>
            <SubTitle className="ProjectsCard-SoonLanguages"> {props.soonLanguages}</SubTitle>
            <Paragraph className="ProjectsCard-Paragraph">{props.description}</Paragraph>
            <Paragraph className="ProjectsCard-Paragraph2">
              Responsive: {props.responsive}
            </Paragraph>
            <CTA href={props.github} className="ProjectsCard-CTA">
              View Github
            </CTA>
            <CTA2 href={props.website} className="ProjectsCard-CTA">
              View Page
            </CTA2>
          </Hover>
        </DisplayOver>
      </Background>
    </div>
  );
};

export default ProjectsCard;
