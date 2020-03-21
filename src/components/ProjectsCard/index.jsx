import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import styled from '@emotion/styled/macro';

const ProjectsCard = props => {
  const Hover = styled.div({
    opacity: 0,
    transition: 'opacity 350ms ease',
    marginTop: '4rem'
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
    fontWeight: 'bold',
    fontSize: '3.5rem'
  });

  const Span = styled.div({ fontSize: '1.5rem' });

  const SubTitle = styled.h4({
    transform: 'translate3d(0,50px,0)',
    transition: 'transform 350ms ease',
    fontSize: '1.8rem'
  });

  const Paragraph = styled.p({
    transform: 'translate3d(0,50px,0)',
    transition: 'transform 350ms ease',
    marginTop: '4rem',
    width: '40%',
    fontSize: '1.8rem'
  });

  const Background = styled.div({
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#FFF',
    position: 'relative',
    width: '800px',
    height: '550px',
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
    left: '20px',
    fontSize: '1.5rem'
  });
  const CTA2 = styled.a({
    position: 'absolute',
    bottom: '20px',
    left: '130px',
    fontSize: '1.5rem'
  });
  return (
    <div className="swiper-slide">
      <Background>
        <DisplayOver>
          <BigTitle>{props.name}</BigTitle>
          <Hover>
            <Span>Made with:</Span>
            <SubTitle> {props.languages}</SubTitle>
            <SubTitle> {props.soonLanguages}</SubTitle>
            <Paragraph>{props.description}</Paragraph>
            <Paragraph>Responsive: {props.responsive}</Paragraph>
            <CTA href={props.github}>View Github</CTA>
            <CTA2 href={props.website}>View Page</CTA2>
          </Hover>
        </DisplayOver>
      </Background>
    </div>
  );
};

export default ProjectsCard;
