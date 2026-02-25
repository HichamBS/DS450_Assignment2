import { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>

          <div className="about-content">
            <div className="about-photo">
              <div className="photo-placeholder">Your Photo</div>
            </div>

            <div className="about-text">
              <p>
                Hello! My name is Hicham Benstitou, a Senior Data Science major with a computing focus at New Jersey Institute of Technology.
                I enjoy working with modern technologies and constantly learning new skills.
              </p>

              <p>
                My experience as Learning Ambassador at Amazon, where I currently work, has significantly improved my leadership, communication, and teamwork skills. 
                Additionally, internships at accounting firms in Morocco have broadened my collaborative, adaptability, and problem-solving capabilities, 
                enhancing my ability to work effectively within diverse teams and manage tasks efficiently.
              </p>

              <p className="skills-title">Skills &amp; Technologies</p>

              <div className="skills-list">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">R</span>
                <span className="skill-badge">SQL</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">HTML5</span>
                <span className="skill-badge">Node.js</span>
                <span className="skill-badge">Git</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">C++</span>
                <span className="skill-badge">C</span>
                <span className="skill-badge">Tableau</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;