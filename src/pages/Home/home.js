import React, { useEffect } from 'react';
import './home.css';
import boyLaptop from '../../assets/boyLaptop.gif'; // Correct relative path
import dsImage from '../../assets/dsa.svg'; // Assuming the new image is saved as dsa_image.png
import webDevImage from '../../assets/webdev.svg'; // Assuming the new image is saved as webdev.svg
import VanillaTilt from 'vanilla-tilt';
// Import Font Awesome icons
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiCodeSSlashLine } from 'react-icons/ri'; // Example placeholder for LeetCode, replace with appropriate icon

const Home = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".boyLaptop"), {
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

      <div className='whatDoIDo'>
        <h2 className='whatDoIDo-text'>What Do I Do?</h2>
        <div className='DSA'>
          <div className='DSA-image'>
            <img src={dsImage} alt="Data Structures and Algorithms" />
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
                competitive websites like Codeforces, Codechef, and many more.
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
            <img src={webDevImage} alt="Web Development" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
