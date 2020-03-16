import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class SideDots extends Component {
  render() {
    return (
      <div className="SideDots-Main">
        <div className="SideDots-SecMain">
          <div className="SideDots-Description">
            <span>About Me</span>
          </div>
          <Link to="AboutMe">
            <div className="SideDots-All"></div>
          </Link>
        </div>
        <div className="SideDots-SecMain">
          <div className="SideDots-Description">
            <span>  Skills</span>
          </div>
          <Link to="Skills">
            <div className="SideDots-All"></div>
          </Link>
        </div>
        <div className="SideDots-SecMain">
          <div className="SideDots-Description">
            <span>Resume</span>
          </div>
          <Link to="Projects">
            <div className="SideDots-All"></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default SideDots;
