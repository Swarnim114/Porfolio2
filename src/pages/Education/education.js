import React, { useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './education.css';
import programmingImg from '../../assets/education2.svg';
import { FiCodepen, FiCode } from 'react-icons/fi'; // Import Codechef and Codeforces icons

const Education = () => {
  useEffect(() => {
    const degreeItems = document.querySelectorAll('.degree-item');
    VanillaTilt.init(degreeItems, {
      max: 4,
      speed: 400,
      glare: true,
      "max-glare": 0.8,
    });
  }, []);

  return (
    <div className="education">
      <div className="programming">
        <img className="programmingImg" src={programmingImg} alt="Programming Img" />
        <div className="programmingLinks">
          <p>Competitive Programming</p>
          <div className="social-media">
            <a href="https://www.codechef.com/users/swarnim114" target="_blank" rel="noopener noreferrer">
              <FiCodepen size={40} /> {/* Codechef icon */}
            </a>
            <a href="https://codeforces.com/profile/Swarnim114" target="_blank" rel="noopener noreferrer">
              <FiCode size={40} /> {/* Codeforces icon */}
            </a>
          </div>
        </div>
      </div>
      <div className="degrees">
        <h2>Degrees Received</h2>
        <div className="degree-item">
          <div className="degree-icon">🎓</div>
          <div className="degree-content">
            <span className="degree-duration">2023 - Present</span>
            <h3>Scaler School of Technology , Bangalore</h3>
            <p>B.Sc in Computer Computer Science</p>
            <p>I have studied software engineering subjects like Data Structures, Algorithms, DBMS, CLI, Web Dev.</p>
            <a className="degree-button" href="https://www.scaler.com/school-of-technology/" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
        <div className="degree-item">
          <div className="degree-icon">🏫</div>
          <div className="degree-content">
            <span className="degree-duration">2020 - 2022</span>
            <h3>Oxford Public School, Jamui</h3>
            <p>Senior Secondary Education</p>
            <p>Percentage: 81%</p>
            <p>I have studied the subjects Physics, Chemistry, Mathematics etc.</p>
            <a className="degree-button" href="http://www.opsjamui.com/" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
        <div className="degree-item">
          <div className="degree-icon">🏫</div>
          <div className="degree-content">
            <span className="degree-duration">till 2020</span>
            <h3>DAV Public School, Jamui</h3>
            <p>C.B.S.E 10th Board</p>
            <p>Percentage: 94.5%</p>
            <a className="degree-button" href="http://davpsjamui.com/" target="_blank" rel="noopener noreferrer">Website</a>
          </div>
        </div>
      </div>
      <div className="certifications"></div>
    </div>
  );
}

export default Education;
