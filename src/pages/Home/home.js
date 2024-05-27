import React from 'react';
import './home.css';
import boyLaptop from '../../assets/boyLaptop.gif'; // Correct relative path

// Import Font Awesome icons
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri'; // Example placeholder for LeetCode, replace with appropriate icon

const Home = () => {
  return (
    <div className="home">
      <div className='introduction'>
        <div className='hello'>
          <h1 className='hello-text'>
            <p className='hello-big'>Hello All! I'm Swarnim</p><br />
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
              <RiCodeSSlashLine size={40} /> {/* Replace with appropriate LeetCode icon */}
            </a>
          </div>
        </div>
        <img className='boyLaptop' src={boyLaptop} alt='Boy with Laptop' />
      </div>

      <div className='whatDoIDo'></div>
    </div>
  );
}

export default Home;
