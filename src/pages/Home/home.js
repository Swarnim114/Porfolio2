import React, { useEffect } from 'react';
import './home.css';
import boyLaptop from '../../assets/boyLaptop.gif';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import Typewriter from '../../components/Typewriter/typewriter';
import VanillaTilt from 'vanilla-tilt';

const Home = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
      max: 4,
      speed: 800,
      scale: 1.02,
      glare: true,
      "max-glare": 0.9,
    });
  }, []);

  return (
    <div className="home">
      <div className='introduction'>
        <div className='hello'>
          <h1 className='hello-text'>
            <p className='hello-big'>
              <Typewriter text="Hello All! I'm Swarnim" speed={50} />
            </p><br />
            I'm a CS student at Scaler School of Technology in Bangalore.<br />
            Passionate about coding and problem-solving,<br />
            I aim to develop innovative tech solutions.<br />
            Welcome to my portfolio where you can explore my projects.
          </h1>
          <div className='social-media'>
            <a href="https://instagram.com/swarnim.114/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.linkedin.com/in/swarnim-975a47169/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/Swarnim114" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} />
            </a>
            <a href="https://leetcode.com/u/Swarnim11/" target="_blank" rel="noopener noreferrer">
              <RiCodeSSlashLine size={40} />
            </a>
          </div>
        </div>
        <div className='boyLaptop-container'>
          <img className='boyLaptop tilt' src={boyLaptop} alt='Boy with Laptop' />
        </div>
      </div>
    </div>
  );
}

export default Home;
