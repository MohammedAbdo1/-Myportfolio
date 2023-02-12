import React, { Component } from "react";

import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import { projectsHeader } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ProjectsImg from "./ProjectsImg";


// import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="projects-heading-img-div">
               
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <h3
                  className="projects-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader["subtitle"]}
                </h3>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
