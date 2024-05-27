import React from 'react';
import './education.css';
import programmingImg from '../../assets/Programming.svg';
import { FiCodepen, FiCode } from 'react-icons/fi'; // Import Codechef and Codeforces icons

const Education = () => {
  return (
    <div className="education">
      <div className='programming'>
        <img className='programmingImg' src={programmingImg} alt='Programming Img' />
        <div className='programmingLinks'>
          <p>Competitive Programming</p>
          <div className='social-media'>
            <a href="https://www.codechef.com/users/swarnim114" target="_blank" rel="noopener noreferrer">
              <FiCodepen size={40} /> {/* Codechef icon */}
            </a>
            <a href="https://codeforces.com/profile/Swarnim114" target="_blank" rel="noopener noreferrer">
              <FiCode size={40} /> {/* Codeforces icon */}
            </a>
          </div>
        </div>
      </div>
      <div className='degress'></div>
      <div className='certifications'></div>
    </div>
  );
}

export default Education;
