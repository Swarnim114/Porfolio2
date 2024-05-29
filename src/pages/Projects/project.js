import React, { useEffect, useRef } from 'react';
import './project.css';
import projectImg from '../../assets/pr3v2.svg';
import VanillaTilt from 'vanilla-tilt';
import anime from 'animejs/lib/anime.es.js';

const Projects = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt
    VanillaTilt.init(document.querySelectorAll(".projects-list-item, .projectImg"), {
      max: 4,
      speed: 800,
      scale: 1.09,
      glare: true,
      "max-glare": 0.9,
    });

    // Initialize Anime.js for SVG animation
    anime({
      targets: svgRef.current.querySelectorAll('path'),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="projects">
      <img ref={svgRef} className='projectImg' src={projectImg} alt="Projects" />

      <div className='projects-list'>
        <div className='projects-list-item'>
          <a href="link_to_project_1" >
            <h3 className='project-list-item-title'>Project 1 title</h3>
            <p className='small-description'>Description of Project 1</p>
          </a>
        </div>

        <div className='projects-list-item'>
          <a href="link_to_project_2" >
            <h3 className='project-list-item-title'>Project 2 title</h3>
            <p className='small-description'>Description of Project 2</p>
          </a>
        </div>
        <div className='projects-list-item'>
          <a href="link_to_project_3" >
            <h3 className='project-list-item-title'>Project 3 title</h3>
            <p className='small-description'>Description of Project 3</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
