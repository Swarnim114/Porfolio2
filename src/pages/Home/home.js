// Home.js
import React, { useEffect } from 'react';
import './home.css';
import boyLaptop from '../../assets/boyLaptop.gif';
import dsImage from '../../assets/dsa.svg';
import webDevImage from '../../assets/webdev.svg';
import backendImage from '../../assets/backend.svg';
import VanillaTilt from 'vanilla-tilt';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri';
import Typewriter from '../../components/Typewriter/typewriter';

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
        <img className='boyLaptop tilt' src={boyLaptop} alt='Boy with Laptop' />
      </div>

      <div className='whatDoIDo'>
        <h2 className='whatDoIDo-text'>What Do I Do?</h2>
        <div className='DSA'>
          <div className='DSA-image'>
            <img className='tilt' src={dsImage} alt="Data Structures and Algorithms" />
          </div>
          <div className='DSA-text'>
            <h2>Data Structures and Algorithms</h2>
            <ul>
              <li>
                💥 I have knowledge of Data Structures <br />
                like Hash Tables, Trees, Tries, Graphs,<br />
                and various algorithms for solving <br />
                various problems efficiently.
              </li>
              <li>
                💥 As I know Data Structures and Algorithms <br />
                are the heart of programming, so I love <br />
                to solve programming questions in different <br />
                competitive websites like Leetcode,  <br />
                GFG, and many more.
              </li>
            </ul>
          </div>
        </div>
        <div className='webdev'>
          <div className='webdev-text'>
            <h2>Web Development</h2>
            <ul>
              <li>
                💥 I have experience with HTML, CSS, <br />
                JavaScript, and various web development <br />
                frameworks like React and Angular.<br />
                I build responsive and dynamic web <br />
                applications.
              </li>
              <li>
                💥 I have developed several projects <br />
                using modern web technologies and <br />
                tools. I am passionate about <br />
                creating seamless user experiences.
              </li>
            </ul>
          </div>
          <div className='webdev-image'>
            <img className='tilt' src={webDevImage} alt="Web Development" />
          </div>
        </div>
        <div className='backend'>
          <div className='backend-image'>
            <img className='tilt' src={backendImage} alt="Backend Development" />
          </div>
          <div className='backend-text'>
            <h2>Backend Development</h2>
            <ul>
              <li>
                💥 I have experience with server-side programming <br />
                using SpringBoot and databases like <br />
                MongoDB and MySQL. 
              </li>
              <li>
                💥 I build robust APIs and handle server-side logic, <br />
                ensuring efficient data management and processing.
              </li>
              <li>
                💥 Passionate about creating scalable backend solutions <br />
                to support dynamic web applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
