import React from 'react';
import './Resume.css';

function Resume() {
  const education = [
    {
      degree: "Bachelor of Science in Data Science (Computing Option)",
      school: "New Jersey Institute of Technology - Ying Wu College of Computing",
      year: "2023 - Present",
      gpa: "3.55/4.0"
    },
    {
      degree: "Associate of Science, Natural Sciences and Math, Computer Science",
      school: "Bergen Community College",
      year: "2020 - 2023",
      gpa: "3.8/4.0"
    },
    {
      degree: "Master of Science in Accounting",
      school: "IAELyon School of Management - Lyon, France",
      year: "2018 - 2020",
      gpa: "3.65/4.0"
    },
    {
      degree: "Bachelor of Science in Accounting",
      school: "IAELyon School of Management - Lyon, France",
      year: "2014 - 2018",
      gpa: "3.82/4.0"
    },
    {
      degree: "High School Diploma",
      school: "Lycée Descartes - Rabat, Morocco",
      year: "2010-2014",
      gpa: "3.9/4.0"
    }
  ];

  const experience = [
    {
      title: "Learning Ambassador",
      company: "Amazon.com Inc. - Carlstadt, NJ",
      period: "2020 - Present",
      responsibilities: [
        "Trained and onboarded new hires, ensuring understanding of operational procedures and safety standards",
        "Supported team productivity by answering questions and assisting with process-related issues during shifts"
      ]
    },
    {
      title: "Accounting and Financial Analysis Intern",
      company: "Berrada & Associates Accounting Firm - Rabat, Morocco",
      period: "Summer 2018",
      responsibilities: [
        "Reviewed and verified financial records for accuracy",
        "Managed accounts receivable and payable",
        "Performed bank reconciliations by matching records and resolving discrepencies",
        "Assisted in preparing VAT and tax declarations in compliance with regulations"
      ]
    },
    {
      title: "Junior Accountant Intern",
      company: "Hinaje & Sibenali Accounting Firm - Rabat, Morocco",
      period: "Summer 2017",
      responsibilities: [
        "Supported bookkeping and record-keeping activities with attention to detail",
        "Assisted in the preparation of VAT declarations and basic financial reports"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "C++", "C", "HTML5", "R", "SQL"],
    "Frameworks & Libraries": ["React", "Node.js", "Numpy", "Pandas", "Scikit-learn", "SciPy", "Matplotlib", "Seaborn", "PyTorch", "TensorFlow"],
    "Tools & Technologies": ["Git", "VS Code", "Linux", "Bash", "Docker", "Tableau"]
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
        
        <div className="resume-content">
          {/* Education Section */}
          <div className="resume-block">
            <h3 className="section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.school}</p>
                    <div className="item-details">
                      <span className="item-period">{edu.year}</span>
                      <span className="item-gpa">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-block">
            <h3 className="section-title">Experience</h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.title}</h4>
                    <p className="item-subtitle">{exp.company} ({exp.period})</p>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-block">
            <h3 className="section-title">Skills</h3>
            <div className="skills-categories">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="skill-category">
                  <h4 className="category-title">{category}</h4>
                  <div className="skill-list">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;