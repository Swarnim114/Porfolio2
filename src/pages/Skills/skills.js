import React, { useEffect } from 'react';
import './skills.css';
import skills from '../../assets/prof.svg';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaTerminal, FaDatabase } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si'; // Import Spring Boot icon

const Skills = () => {
  useEffect(() => {
    const fills = document.querySelectorAll('.fill');
    const widths = ['90%', '95%', '70%', '90%', '80%', '75%', '70%', '80%', '65%'];

    fills.forEach((fill, index) => {
      setTimeout(() => {
        fill.style.width = widths[index];
      }, 100);
    });
  }, []);

  return (
    <div className="skills-container">
      <img className='skills-image' src={skills} alt='Skills' />
      <div className='proficiency'>
        <h2>Proficiency</h2>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaTerminal className='icon' /> {/* CLI Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaJava className='icon' /> {/* Java Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaPython className='icon' /> {/* Python Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaHtml5 className='icon' /> {/* HTML Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaCss3Alt className='icon' /> {/* CSS Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaJs className='icon' /> {/* JavaScript Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaReact className='icon' /> {/* React Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <SiSpringboot className='icon' /> {/* Spring Boot Icon */}
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaDatabase className='icon' /> {/* MySQL Icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
