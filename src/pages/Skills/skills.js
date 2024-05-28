import React, { useEffect } from 'react';
import './skills.css';
import skills from '../../assets/Skills.svg';
import { FaCode, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  useEffect(() => {
    // Set the desired widths for each proficiency bar
    const fills = document.querySelectorAll('.fill');
    const widths = ['80%', '70%', '90%', '75%', '85%', '60%'];

    fills.forEach((fill, index) => {
      // Set a timeout to allow for rendering
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
              <FaCode className='icon' />
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaPython className='icon' />
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaHtml5 className='icon' />
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaCss3Alt className='icon' />
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaJs className='icon' />
            </div>
          </div>
        </div>
        <div className='proficiency-bar'>
          <div className='bar'>
            <div className='fill'>
              <FaDatabase className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
