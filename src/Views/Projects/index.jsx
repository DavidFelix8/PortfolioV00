import React, { Component } from 'react';

import 'swiper/swiper.scss';
import './style.scss';

import Swiper from 'react-id-swiper';
import ProjectsCard from './../../components/ProjectsCard';
import Projects from './../../data/projects.json';

class ProjectsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      }
    };
    return (
      <section className="Projects_Section">
        <Swiper {...params}>
          {Projects.map((ProjectSingle, index) => {
            return <ProjectsCard key={index} {...ProjectSingle} />;
          })}
        </Swiper>
      </section>
    );
  }
}

export default ProjectsView;
