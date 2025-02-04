import { useEffect, useState, useRef } from "react";
import projects from "/src/assets/data/projects.js";
import "/src/assets/styles/Projects.css";

function Projects() {
  const [expandedProject, setExpandedProjectIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  // Sets playback rate for the video when a project is expanded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, [expandedProject]);

  const handleProjectClick = (index) => {
    if (expandedProject === index) {
      // Collapse the project if it's already expanded
      setExpandedProjectIndex(null);
      scrollToElement("projects");
    } else {
      // Expand the selected project
      setExpandedProjectIndex(index);
      setTimeout(() => scrollToElement("project"), 100);
    }
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <div className="projects-box">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project ${expandedProject === index ? "expanded" : ""}`}
            onClick={() => handleProjectClick(index)}
            aria-label={`Expand project: ${project.title}`}
          >
            <div className="project-content">
              {expandedProject === index ? (
                <div className="project-video">
                  {isLoading && (
                    <div className="loading-indicator">Loading...</div>
                  )}
                  <video
                    id="project"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    aria-label={`Video for project: ${project.title}`}
                    onLoadStart={() => setIsLoading(true)}
                    onLoadedData={() => setIsLoading(false)}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <img src={project.img} alt={`Screenshot of ${project.title}`} />
              )}
              <div className="project-info">
                <h3>{project.title}</h3>
                {expandedProject === index ? (
                  <div className="info-container">
                    <p className="info-left">{project.description}</p>
                    <ul className="info-right">
                      <li>
                        <strong>For:</strong> {project.for}
                      </li>
                      <li>
                        <strong>By:</strong> {project.by}
                      </li>
                      <li>
                        <strong>Technologies:</strong>{" "}
                        {project.technologies.join(", ")}
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p className="project-overview">{project.overview}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
