import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ReactHover from 'react-hover';

import './style.scss';

class AboutMeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: true,
      contactShow: false
    };
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent = () => {
    this.setState(previousState => {
      return {
        textContent: !this.state.textContent
      };
    });
  };

  MoreAbout = () => {
    this.setState(previousState => {
      return {
        contactShowMore: !this.state.contactShowMore
      };
    });
  };

  render() {
    const optionsCursorTrueWithMargin = {
      followCursor: true,
      shiftX: 20,
      shiftY: 0
    };
    return (
      <section id="AboutMe-Section">
        <article className="AboutMe-Article d-flex flex-column justify-content-center">
          {this.state.textContent ? (
            <div>
              <h3>
                <strong>
                  Hi, {'\n'}
                  My name is David Félix
                </strong>
                {'\n'} I’m a Computer Science Student,
                {'\n'} And I’m a passionate for Web Development,
                {'\n'} I’m always looking to increase my skills and my creativity, {'\n'}and learn
                new technologies {'\n'} so I can create amazing projects!
              </h3>
              <h2 className="AboutMe-ContactMeHere">You can contact me here:</h2>
              <button className="AboutMe-btn-ArrowDown" onClick={this.updateContent}>
                <img
                  src="./images/arrow-circle-down-solid.svg"
                  alt="ArrowDown"
                  className="AboutMe-ArrowDown"
                />
              </button>
            </div>
          ) : (
            <div>
              <h2 className="AboutMe-FindMe">There are your ways to Find Me:</h2>
              <div className="AboutMe-Social d-flex justify-content-around">
                <a href="https://www.linkedin.com/in/davidmcfelix/">
                  <Image
                    className="AboutMe-Social-img"
                    src="./images/social-icons/linkedin-icon.png"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://github.com/DavidFelix8">
                  <Image
                    className="AboutMe-Social-img"
                    src="./images/social-icons/github-icon.png"
                    alt="Github"
                  />
                </a>
                <a href={`mailto:davidmcfelix@gmail.com`} target="_top">
                  <Image
                    className="AboutMe-Social-img"
                    src="./images/social-icons/email-icon.png"
                    alt="Email"
                  />
                </a>
              </div>

              <ReactHover options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type="trigger">
                  <button className="AboutMe-btn-KnowMore" onClick={this.MoreAbout}>
                    <h5 className="AboutMe-KnowMore">
                      &#x2B10;In case you want to know more about me &#x2B0E;
                    </h5>
                  </button>
                </ReactHover.Trigger>
                <ReactHover.Hover type="hover">
                  <h1 className="AboutMe-Hover-ClickMe"> Click Me </h1>
                </ReactHover.Hover>
              </ReactHover>
            </div>
          )}
          {this.state.contactShowMore ? (
            <div className="AboutMe-KnowMore-Links-div">
              <a
                className="AboutMe-KnowMore-Links"
                href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A6d47facc-024e-48db-9a50-d0d93fd3e47e"
              >
                Resume
              </a>
              <a
                className="AboutMe-KnowMore-Links"
                href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3Ad6989096-3801-4ff5-90a9-4df02990dd2d"
              >
                Goals
              </a>
            </div>
          ) : null}
        </article>
      </section>
    );
  }
}

export default AboutMeView;
