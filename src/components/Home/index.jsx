import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutMeView from './../../Views/AboutMe';
import SkillsView from './../../Views/Skills';
import ProjectsView from './../../Views/Projects';

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <AboutMeView />
          {/* <SkillsView /> */}
          <ProjectsView />
        </BrowserRouter>
      </div>
    );
  }
}

export default HomeComponent;
