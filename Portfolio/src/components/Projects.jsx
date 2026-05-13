import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { resumeData } from "../data/resumeData";
import DrawingHeading from "./DrawingHeading";

const Projects = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    animate(cardsRef.current.children, {
      translateY: [50, 0],
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 1000,
      easing: "outElastic(1, .8)",
      delay: stagger(200),
    });
  }, []);

  return (
    <section id="projects" className="section-container projects-section">
      <div className="max-width-wrapper">
        <DrawingHeading title="Featured" subtitle="Projects" />

        <div ref={cardsRef} className="projects-grid">
          {resumeData.projects.map((project, index) => (
            <div key={index} style={{ opacity: 0 }} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.description}</p>

              <div className="mt-auto flex gap-4">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View GitHub &rarr;
                </a>

                {/* Live Site Link (Conditional Rendering) */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                    style={{
                      color: "#E8EDDF",
                      borderColor: "rgba(232, 237, 223, 0.4)",
                    }}
                  >
                    Live Site &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
