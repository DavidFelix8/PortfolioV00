import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import './style.scss';

class AboutMeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spanText: ['Hi,', ' \n', ' My name is David Félix'],
      text: [
        ' \n',
        'I’m a Computer Science Student',
        ' \n',
        'And I’m a passionate for Web Development',
        ' \n',
        'I am always looking to increase my skills and my creativity',
        ' \n',
        'and learn new technologies so I can create amazing projects!'
      ],
      contactText: ['You can contact me here:']
    };
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent = () => {
    this.setState(previousState => {
      return {
        spanText: 'There are your ways to Find Me:',
        text: '',
        contactText: ''
      };
    });
  };

  render() {
    return (
      <section id="AboutMe-Section">
        <article className="AboutMe-Article d-flex flex-column justify-content-center">
          <h3>
            <strong>{this.state.spanText}</strong>
            {this.state.text}
          </h3>
          <h2 className="AboutMe-ContactMeHere">{this.state.contactText}</h2>
          <div className="AboutMe-Social d-flex justify-content-around">
            <Link target="_blank" to="https://www.linkedin.com/in/davidmcfelix/">
              <Image
                className="AboutMe-Social-img"
                src="./images/social-icons/linkedin-icon.png"
                alt="LinkedIn"
              />
            </Link>
            <Link to="https://github.com/DavidFelix8">
              <Image
                className="AboutMe-Social-img"
                src="./images/social-icons/github-icon.png"
                alt="Github"
              />
            </Link>
            <Link to={`mailto:davidfelix1997@hotmail.com`} target="_top">
              <Image
                className="AboutMe-Social-img"
                src="./images/social-icons/email-icon.png"
                alt="Email"
              />
            </Link>
          </div>
          <div>
            <button className="AboutMe-btn-ArrowDown" onClick={this.updateContent}>
              <i className="fas fa-arrow-alt-circle-down AboutMe-ArrowDown"></i>
            </button>
          </div>
        </article>
      </section>
    );
  }
}

export default AboutMeView;
