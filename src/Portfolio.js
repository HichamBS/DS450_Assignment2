import { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          project_image: "",
          title: "WRF-Solar Model Tuning",
          description: "Tuned WRF-Solar parameters on a Linux cluster and evaluated results using MSE against ground truth",
          technologies: ["Python", "Linux", "WRF-Solar", "Bayesian Optimization", "Grid Search", "Optuna"],
        },
        {
          project_image: "",
          title: "Credit Card Fraud Detection Model",
          description: "Built fraud detection models and evaluated performance with stratified cross-validation",
          technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Random Forest"],
        },
      ]
    };
  }

  render() {
    return (
      <div className="portfolio-section">
        <div className="portfolio-container">
          <h2 className="portfolio-title">My Portfolio</h2>

          <div className="projects-grid">
            {this.state.projects.map((project, index) => {
              return (
                <div key={index} className="project-card">
                  <div className="project-image">
                    {project.project_image === "" ? (
                      <div className="project-image-placeholder">Project Image</div>
                    ) : (
                      <img className="project-img" src={project.project_image} alt={project.title} />
                    )}
                  </div>

                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech">
                      {project.technologies.map((tech, i) => {
                        return (
                          <span key={i} className="tech-badge">{tech}</span>
                        );
                      })}
                    </div>

                    <div className="project-buttons">
                      <button type="button" className="project-btn">Live Demo</button>
                      <button type="button" className="project-btn outline">View Code</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;